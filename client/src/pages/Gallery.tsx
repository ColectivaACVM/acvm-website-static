import { useState, useEffect } from 'react';
import { Upload, Trash2, Loader } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';

export default function Gallery() {
  const { t } = useLanguage();
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const listImages = trpc.images.list.useQuery();
  const uploadImage = trpc.images.upload.useMutation();
  const deleteImage = trpc.images.delete.useMutation();

  useEffect(() => {
    if (listImages.data) {
      setImages(listImages.data);
    }
  }, [listImages.data]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      alert('Por favor selecciona una imagen válida');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = (event.target?.result as string).split(',')[1];

        const result = await uploadImage.mutateAsync({
          filename: selectedFile.name,
          originalName: selectedFile.name,
          mimeType: selectedFile.type,
          size: selectedFile.size,
          data: base64,
          description,
          tags,
        });

        if (result.success) {
          setImages([result.image, ...images]);
          setSelectedFile(null);
          setDescription('');
          setTags('');
          alert('Imagen subida exitosamente');
        }
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error al subir la imagen');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (imageId: number) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta imagen?')) return;

    try {
      const result = await deleteImage.mutateAsync({ imageId });
      if (result.success) {
        setImages(images.filter((img) => img.id !== imageId));
        alert('Imagen eliminada exitosamente');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error al eliminar la imagen');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          {t('gallery.title') || 'Galería de Imágenes'}
        </h1>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('gallery.upload') || 'Subir Nueva Imagen'}
          </h2>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-primary rounded-lg p-6 text-center hover:bg-cream transition">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <Upload className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-primary font-semibold">
                  {selectedFile ? selectedFile.name : 'Haz clic para seleccionar una imagen'}
                </p>
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                {t('gallery.description') || 'Descripción (opcional)'}
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe la imagen..."
                className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                {t('gallery.tags') || 'Etiquetas (opcional)'}
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="proyecto, territorio, comunidad..."
                className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              onClick={handleUpload}
              disabled={!selectedFile || uploading}
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  {t('gallery.uploading') || 'Subiendo...'}
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  {t('gallery.upload_button') || 'Subir Imagen'}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('gallery.my_images') || 'Mis Imágenes'} ({images.length})
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500">
                {t('gallery.no_images') || 'No hay imágenes aún. ¡Sube tu primera imagen!'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img
                    src={image.s3Url}
                    alt={image.originalName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-primary mb-2 truncate">
                      {image.originalName}
                    </h3>
                    {image.description && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {image.description}
                      </p>
                    )}
                    {image.tags && (
                      <div className="mb-3 flex flex-wrap gap-1">
                        {image.tags.split(',').map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mb-3">
                      {new Date(image.createdAt).toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      {t('gallery.delete') || 'Eliminar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
