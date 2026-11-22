import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/admin/AdminPanel";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Blog CMS | Chartered Solution" },
      {
        name: "description",
        content: "Manage Chartered Solution blog posts and categories.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPanel,
});
