import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { createImage, getUserImages, deleteImage } from "../db";
import { storagePut } from "../storage";

export const imagesRouter = router({
  // Upload a new image
  upload: protectedProcedure
    .input(
      z.object({
        filename: z.string(),
        originalName: z.string(),
        mimeType: z.string(),
        size: z.number(),
        data: z.string(), // base64 encoded image data
        description: z.string().optional(),
        tags: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Decode base64 data
        const buffer = Buffer.from(input.data, "base64");

        // Upload to S3
        const s3Key = `images/${ctx.user.id}/${Date.now()}-${input.filename}`;
        const { url } = await storagePut(s3Key, buffer, input.mimeType);

        // Save metadata to database
        const image = await createImage({
          userId: ctx.user.id,
          filename: input.filename,
          originalName: input.originalName,
          mimeType: input.mimeType,
          size: input.size,
          s3Key,
          s3Url: url,
          description: input.description,
          tags: input.tags,
        });

        if (!image) {
          throw new Error("Failed to save image metadata");
        }

        return {
          success: true,
          image,
        };
      } catch (error) {
        console.error("Image upload failed:", error);
        throw error;
      }
    }),

  // List all images for the current user
  list: protectedProcedure.query(async ({ ctx }) => {
    try {
      const userImages = await getUserImages(ctx.user.id);
      return userImages;
    } catch (error) {
      console.error("Failed to list images:", error);
      throw error;
    }
  }),

  // Delete an image
  delete: protectedProcedure
    .input(z.object({ imageId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      try {
        const success = await deleteImage(input.imageId, ctx.user.id);
        return { success };
      } catch (error) {
        console.error("Image deletion failed:", error);
        throw error;
      }
    }),
});
