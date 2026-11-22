import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowDownUp,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileText,
  FolderOpen,
  ImagePlus,
  LayoutDashboard,
  LogOut,
  Menu,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Tag,
  Trash2,
  Upload,
  UserRound,
  X,
} from "lucide-react";
import "./admin-panel.css";

type BlogStatus = "Published" | "Draft";
type Blog = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  status: BlogStatus;
  readTime: string;
  image: string;
  slug: string;
};
type Page = "Dashboard" | "Add New Blog" | "All Blogs" | "Categories" | "Profile & Account";

const initialBlogs: Blog[] = [
  {
    id: 1,
    title: "A practical guide to GST registration for new businesses",
    excerpt:
      "What founders need to know about eligibility, documents, and the registration process.",
    category: "GST & Taxation",
    author: "Jitendra Malviya",
    date: "Nov 18, 2026",
    status: "Published",
    readTime: "6 min read",
    image: "/Charted.jpeg",
    slug: "gst-registration-guide",
  },
  {
    id: 2,
    title: "FSSAI licensing: choosing the right licence for your food business",
    excerpt: "A straightforward breakdown of basic, state, and central FSSAI licence requirements.",
    category: "Business Setup",
    author: "Jitendra Malviya",
    date: "Nov 15, 2026",
    status: "Published",
    readTime: "8 min read",
    image: "/MY IMAGES.jpg.jpeg",
    slug: "fssai-licence-types",
  },
  {
    id: 3,
    title: "MSME registration benefits for growing Indian companies",
    excerpt: "Explore the practical advantages of registering your enterprise on the Udyam portal.",
    category: "Compliance",
    author: "Jitendra Malviya",
    date: "Nov 12, 2026",
    status: "Draft",
    readTime: "5 min read",
    image: "/Charted.jpeg",
    slug: "msme-registration-benefits",
  },
  {
    id: 4,
    title: "Your 2026 compliance calendar: key dates to know",
    excerpt: "Keep your business prepared with a clear view of important filing deadlines.",
    category: "Compliance",
    author: "Jitendra Malviya",
    date: "Nov 9, 2026",
    status: "Draft",
    readTime: "4 min read",
    image: "/MY IMAGES.jpg.jpeg",
    slug: "compliance-calendar-2026",
  },
];
const initialCategories = [
  { name: "GST & Taxation", count: 12, color: "violet" },
  { name: "Business Setup", count: 9, color: "blue" },
  { name: "Compliance", count: 8, color: "green" },
  { name: "Industry Insights", count: 5, color: "amber" },
];
const navItems: { label: Page; icon: typeof LayoutDashboard }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Add New Blog", icon: Plus },
  { label: "All Blogs", icon: FileText },
  { label: "Categories", icon: FolderOpen },
  { label: "Profile & Account", icon: UserRound },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function shortDate(date: string) {
  return date === "Just now"
    ? date
    : new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(new Date(date));
}

export function AdminPanel() {
  const [activePage, setActivePage] = useState<Page>("Dashboard");
  const [blogs, setBlogs] = useState(initialBlogs);
  const [categories, setCategories] = useState(initialCategories);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All" | BlogStatus>("All");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [notice, setNotice] = useState(
    "Preview workspace only — changes here are not yet saved to the live website.",
  );
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [previewBlog, setPreviewBlog] = useState<Blog | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [draft, setDraft] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "GST & Taxation",
    tags: "",
    slug: "",
    author: "Jitendra Malviya",
    seoTitle: "",
    seoDescription: "",
    image: "",
  });

  const published = blogs.filter((blog) => blog.status === "Published").length;
  const drafts = blogs.length - published;
  const filteredBlogs = useMemo(
    () =>
      blogs.filter((blog) => {
        const matchesQuery = blog.title.toLowerCase().includes(query.toLowerCase());
        const matchesFilter = filter === "All" || blog.status === filter;
        return matchesQuery && matchesFilter;
      }),
    [blogs, filter, query],
  );

  function openEditor(blog?: Blog) {
    setEditingBlog(blog ?? null);
    setDraft(
      blog
        ? {
            title: blog.title,
            excerpt: blog.excerpt,
            content:
              "Add the complete article here. Use headings and short paragraphs to make it easy to read.",
            category: blog.category,
            tags: "business, compliance",
            slug: blog.slug,
            author: blog.author,
            seoTitle: blog.title,
            seoDescription: blog.excerpt,
            image: blog.image,
          }
        : {
            title: "",
            excerpt: "",
            content: "",
            category: categories[0]?.name ?? "",
            tags: "",
            slug: "",
            author: "Jitendra Malviya",
            seoTitle: "",
            seoDescription: "",
            image: "",
          },
    );
    setActivePage("Add New Blog");
    setMobileNavOpen(false);
  }

  function updateDraft(key: keyof typeof draft, value: string) {
    setDraft((current) => ({
      ...current,
      [key]: value,
      ...(key === "title" && !current.slug ? { slug: slugify(value) } : {}),
    }));
  }

  function handleImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
      setNotice("Choose an image under 5 MB. Uploads are not connected in this preview.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => updateDraft("image", String(reader.result ?? ""));
    reader.readAsDataURL(file);
  }

  function saveBlog(status: BlogStatus, event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    if (!draft.title.trim() || !draft.excerpt.trim() || !draft.content.trim()) return;
    const updated: Blog = {
      id: editingBlog?.id ?? Date.now(),
      title: draft.title.trim(),
      excerpt: draft.excerpt.trim(),
      category: draft.category,
      author: draft.author.trim() || "Chartered Solution",
      date: editingBlog?.date ?? "Just now",
      status,
      readTime: "5 min read",
      image: draft.image || "/Charted.jpeg",
      slug: slugify(draft.slug || draft.title),
    };
    setBlogs((current) =>
      editingBlog
        ? current.map((blog) => (blog.id === editingBlog.id ? updated : blog))
        : [updated, ...current],
    );
    setNotice(
      `${status === "Draft" ? "Draft saved" : "Preview marked as published"} for this session only. Connect the CMS backend to persist or publish it.`,
    );
    setActivePage("All Blogs");
  }

  function setBlogStatus(blog: Blog, status: BlogStatus) {
    setBlogs((current) =>
      current.map((item) => (item.id === blog.id ? { ...item, status } : item)),
    );
    setNotice(`“${blog.title}” is marked ${status.toLowerCase()} in this preview only.`);
  }

  function addCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanName = categoryName.trim();
    if (
      !cleanName ||
      categories.some((category) => category.name.toLowerCase() === cleanName.toLowerCase())
    )
      return;
    setCategories((current) => [...current, { name: cleanName, count: 0, color: "blue" }]);
    setCategoryName("");
    setNotice(`${cleanName} was added to this preview session.`);
  }

  function navigate(page: Page) {
    setActivePage(page);
    setMobileNavOpen(false);
  }

  return (
    <div className="cms-shell">
      <aside className={`cms-sidebar ${mobileNavOpen ? "is-open" : ""}`}>
        <a className="cms-brand" href="/" aria-label="Chartered Solution home">
          <span className="cms-brand-mark">C</span>
          <span className="cms-brand-copy">
            <strong>Chartered</strong>
            <small>SOLUTION · BLOG CMS</small>
          </span>
        </a>
        <div className="cms-side-label">WORKSPACE</div>
        <nav className="cms-nav" aria-label="Admin navigation">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`cms-nav-item ${activePage === label ? "active" : ""}`}
              onClick={() => (label === "Add New Blog" ? openEditor() : navigate(label))}
              aria-current={activePage === label ? "page" : undefined}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
              {label === "All Blogs" && <span className="cms-nav-count">{blogs.length}</span>}
            </button>
          ))}
        </nav>
        <div className="cms-sidebar-bottom">
          <div className="cms-help-card">
            <div className="cms-help-icon">
              <CircleHelp aria-hidden="true" />
            </div>
            <strong>Need a hand?</strong>
            <p>Your publishing workspace is being set up.</p>
            <a href="/contact-us">
              Contact support <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <button
            className="cms-nav-item cms-logout"
            onClick={() =>
              setNotice("Sign out is available after secure admin authentication is connected.")
            }
          >
            <LogOut aria-hidden="true" />
            <span>Logout</span>
          </button>
          <div className="cms-user-mini">
            <div className="cms-avatar">JM</div>
            <div>
              <strong>Jitendra Malviya</strong>
              <small>Administrator · preview</small>
            </div>
            <MoreHorizontal aria-hidden="true" />
          </div>
        </div>
      </aside>

      {mobileNavOpen && (
        <button
          className="cms-mobile-scrim"
          aria-label="Close navigation"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <main className="cms-main">
        <header className="cms-topbar">
          <button
            className="cms-mobile-menu"
            aria-label="Open navigation"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
          <div className="cms-breadcrumb">
            <span>Blog CMS</span>
            <ChevronRight aria-hidden="true" />
            <strong>
              {activePage === "Add New Blog" && editingBlog ? "Edit blog" : activePage}
            </strong>
          </div>
          <div className="cms-top-actions">
            <a className="cms-site-link" href="/" target="_blank" rel="noreferrer">
              View website <ArrowUpRight aria-hidden="true" />
            </a>
            <button
              className="cms-top-avatar"
              onClick={() => navigate("Profile & Account")}
              aria-label="Open profile"
            >
              JM
            </button>
          </div>
        </header>

        <div className="cms-content">
          <div className="cms-preview-alert" role="status">
            <span className="cms-alert-dot" />
            <p>
              <strong>Preview mode</strong>
              <span>{notice}</span>
            </p>
            <button aria-label="Dismiss notice" onClick={() => setNotice("")}>
              <X aria-hidden="true" />
            </button>
          </div>
          {notice === "" && (
            <div className="cms-preview-alert compact" role="status">
              <span className="cms-alert-dot" />
              <p>
                <strong>Preview mode</strong>
                <span>Changes in this session are not yet saved to the live website.</span>
              </p>
              <button
                aria-label="Show details"
                onClick={() =>
                  setNotice(
                    "Preview workspace only — changes here are not yet saved to the live website.",
                  )
                }
              >
                <CircleHelp aria-hidden="true" />
              </button>
            </div>
          )}
          {activePage === "Dashboard" && (
            <Dashboard
              blogs={blogs}
              published={published}
              drafts={drafts}
              onAdd={() => openEditor()}
              onAll={() => navigate("All Blogs")}
              onEdit={openEditor}
              onPreview={setPreviewBlog}
              onStatus={setBlogStatus}
            />
          )}
          {activePage === "All Blogs" && (
            <AllBlogs
              blogs={filteredBlogs}
              query={query}
              filter={filter}
              onQuery={setQuery}
              onFilter={setFilter}
              onAdd={() => openEditor()}
              onEdit={openEditor}
              onPreview={setPreviewBlog}
              onStatus={setBlogStatus}
              onDelete={(blog) => {
                setBlogs((current) => current.filter((item) => item.id !== blog.id));
                setNotice(`“${blog.title}” was removed from this preview session.`);
              }}
            />
          )}
          {activePage === "Add New Blog" && (
            <BlogEditor
              draft={draft}
              categories={categories.map((item) => item.name)}
              editing={Boolean(editingBlog)}
              onChange={updateDraft}
              onImage={handleImage}
              onCancel={() => navigate("All Blogs")}
              onPreview={() =>
                setPreviewBlog({
                  id: 0,
                  title: draft.title || "Untitled blog",
                  excerpt: draft.excerpt || "Your blog description will appear here.",
                  category: draft.category,
                  author: draft.author,
                  date: "Just now",
                  status: "Draft",
                  readTime: "5 min read",
                  image: draft.image || "/Charted.jpeg",
                  slug: slugify(draft.slug || draft.title || "untitled-blog"),
                })
              }
              onSave={saveBlog}
            />
          )}
          {activePage === "Categories" && (
            <Categories
              categories={categories}
              categoryName={categoryName}
              onName={setCategoryName}
              onAdd={addCategory}
              onDelete={(name) => {
                setCategories((current) => current.filter((category) => category.name !== name));
                setNotice(`${name} was removed from this preview session.`);
              }}
            />
          )}
          {activePage === "Profile & Account" && <Profile />}
        </div>
      </main>
      {previewBlog && <BlogPreview blog={previewBlog} onClose={() => setPreviewBlog(null)} />}
    </div>
  );
}

function PageHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="cms-page-heading">
      <div>
        <div className="cms-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

function Dashboard({
  blogs,
  published,
  drafts,
  onAdd,
  onAll,
  onEdit,
  onPreview,
  onStatus,
}: {
  blogs: Blog[];
  published: number;
  drafts: number;
  onAdd: () => void;
  onAll: () => void;
  onEdit: (blog: Blog) => void;
  onPreview: (blog: Blog) => void;
  onStatus: (blog: Blog, status: BlogStatus) => void;
}) {
  const latest = blogs.slice(0, 4);
  return (
    <>
      <PageHeading
        eyebrow="Your editorial workspace"
        title="Good morning, Jitendra"
        description="Here’s what’s happening with your content today."
        action={
          <button className="cms-primary-button" onClick={onAdd}>
            <Plus aria-hidden="true" /> New blog post
          </button>
        }
      />
      <div className="cms-stats-grid">
        <StatCard
          label="Total blogs"
          value={String(blogs.length).padStart(2, "0")}
          detail="Across all categories"
          icon={BookOpen}
          tone="blue"
          trend="Your content library"
        />
        <StatCard
          label="Published"
          value={String(published).padStart(2, "0")}
          detail="Visible on your website"
          icon={Check}
          tone="green"
          trend="Ready for readers"
        />
        <StatCard
          label="Drafts"
          value={String(drafts).padStart(2, "0")}
          detail="Work in progress"
          icon={Pencil}
          tone="amber"
          trend="Pick up where you left off"
        />
        <StatCard
          label="Categories"
          value="04"
          detail="Content themes"
          icon={Tag}
          tone="violet"
          trend="Organise your expertise"
        />
      </div>
      <div className="cms-dashboard-grid">
        <section className="cms-card cms-recent-card">
          <div className="cms-card-heading">
            <div>
              <h2>Recently added</h2>
              <p>Your latest articles and drafts</p>
            </div>
            <button className="cms-text-button" onClick={onAll}>
              View all <ArrowRight aria-hidden="true" />
            </button>
          </div>
          <div className="cms-recent-list">
            {latest.map((blog) => (
              <BlogRow
                key={blog.id}
                blog={blog}
                onEdit={onEdit}
                onPreview={onPreview}
                onStatus={onStatus}
              />
            ))}
          </div>
        </section>
        <aside className="cms-card cms-side-card">
          <div className="cms-card-heading">
            <div>
              <h2>Quick actions</h2>
              <p>Keep your content moving</p>
            </div>
            <Sparkles aria-hidden="true" />
          </div>
          <button className="cms-quick-action" onClick={onAdd}>
            <span className="cms-quick-icon blue">
              <Plus aria-hidden="true" />
            </span>
            <span>
              <strong>Write a new blog</strong>
              <small>Start with a fresh draft</small>
            </span>
            <ChevronRight aria-hidden="true" />
          </button>
          <button className="cms-quick-action" onClick={onAll}>
            <span className="cms-quick-icon gold">
              <FileText aria-hidden="true" />
            </span>
            <span>
              <strong>Manage all posts</strong>
              <small>Edit, preview or publish</small>
            </span>
            <ChevronRight aria-hidden="true" />
          </button>
          <div className="cms-tip">
            <span>EDITOR&apos;S TIP</span>
            <p>
              Short, descriptive titles help readers quickly understand what your article is about.
            </p>
            <ArrowUpRight aria-hidden="true" />
          </div>
        </aside>
      </div>
      <div className="cms-dashboard-footer">
        <span>
          <Clock3 aria-hidden="true" /> Last updated just now
        </span>
        <span>
          <BarChart3 aria-hidden="true" /> Content overview
        </span>
      </div>
    </>
  );
}

function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  tone,
  trend,
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof BookOpen;
  tone: string;
  trend: string;
}) {
  return (
    <article className="cms-card cms-stat-card">
      <div className="cms-stat-top">
        <span>{label}</span>
        <span className={`cms-stat-icon ${tone}`}>
          <Icon aria-hidden="true" />
        </span>
      </div>
      <div className="cms-stat-value">{value}</div>
      <p>{detail}</p>
      <div className="cms-stat-trend">
        <span className={`cms-trend-dot ${tone}`} />
        {trend}
      </div>
    </article>
  );
}

function BlogRow({
  blog,
  onEdit,
  onPreview,
  onStatus,
}: {
  blog: Blog;
  onEdit: (blog: Blog) => void;
  onPreview: (blog: Blog) => void;
  onStatus: (blog: Blog, status: BlogStatus) => void;
}) {
  return (
    <article className="cms-blog-row">
      <img src={blog.image} alt="" />
      <div className="cms-blog-info">
        <div className="cms-blog-category">{blog.category}</div>
        <button className="cms-blog-title" onClick={() => onEdit(blog)}>
          {blog.title}
        </button>
        <div className="cms-blog-meta">
          {blog.author}
          <span />
          {shortDate(blog.date)}
        </div>
      </div>
      <span className={`cms-status ${blog.status.toLowerCase()}`}>
        <i />
        {blog.status}
      </span>
      <div className="cms-row-actions">
        <button aria-label={`Preview ${blog.title}`} onClick={() => onPreview(blog)}>
          <ArrowUpRight aria-hidden="true" />
        </button>
        <button aria-label={`Edit ${blog.title}`} onClick={() => onEdit(blog)}>
          <Pencil aria-hidden="true" />
        </button>
        <button
          aria-label={`Mark ${blog.title} ${blog.status === "Draft" ? "published" : "draft"}`}
          onClick={() => onStatus(blog, blog.status === "Draft" ? "Published" : "Draft")}
        >
          <MoreHorizontal aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function AllBlogs({
  blogs,
  query,
  filter,
  onQuery,
  onFilter,
  onAdd,
  onEdit,
  onPreview,
  onStatus,
  onDelete,
}: {
  blogs: Blog[];
  query: string;
  filter: "All" | BlogStatus;
  onQuery: (value: string) => void;
  onFilter: (value: "All" | BlogStatus) => void;
  onAdd: () => void;
  onEdit: (blog: Blog) => void;
  onPreview: (blog: Blog) => void;
  onStatus: (blog: Blog, status: BlogStatus) => void;
  onDelete: (blog: Blog) => void;
}) {
  return (
    <>
      <PageHeading
        eyebrow="Content library"
        title="All blogs"
        description="Find, edit and organise every article in your library."
        action={
          <button className="cms-primary-button" onClick={onAdd}>
            <Plus aria-hidden="true" /> New blog post
          </button>
        }
      />
      <section className="cms-card cms-table-card">
        <div className="cms-table-toolbar">
          <label className="cms-search">
            <Search aria-hidden="true" />
            <input
              aria-label="Search blogs by title"
              placeholder="Search by title..."
              value={query}
              onChange={(event) => onQuery(event.target.value)}
            />
          </label>
          <div className="cms-filter-tabs" aria-label="Filter blog status">
            {(["All", "Published", "Draft"] as const).map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => onFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="cms-filter-button"
            onClick={() => onFilter(filter === "All" ? "Published" : "All")}
          >
            <ArrowDownUp aria-hidden="true" /> Filter
          </button>
        </div>
        <div className="cms-table-wrap">
          <table className="cms-table">
            <thead>
              <tr>
                <th>Blog post</th>
                <th>Category</th>
                <th>Status</th>
                <th>Last updated</th>
                <th>
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>
                    <div className="cms-table-blog">
                      <img src={blog.image} alt="" />
                      <div>
                        <button onClick={() => onEdit(blog)}>{blog.title}</button>
                        <span>/{blog.slug}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="cms-table-category">{blog.category}</span>
                  </td>
                  <td>
                    <span className={`cms-status ${blog.status.toLowerCase()}`}>
                      <i />
                      {blog.status}
                    </span>
                  </td>
                  <td className="cms-date-cell">
                    <CalendarDays aria-hidden="true" />
                    {blog.date}
                  </td>
                  <td>
                    <div className="cms-row-actions">
                      <button aria-label={`Preview ${blog.title}`} onClick={() => onPreview(blog)}>
                        <ArrowUpRight aria-hidden="true" />
                      </button>
                      <button aria-label={`Edit ${blog.title}`} onClick={() => onEdit(blog)}>
                        <Pencil aria-hidden="true" />
                      </button>
                      <button aria-label={`Delete ${blog.title}`} onClick={() => onDelete(blog)}>
                        <Trash2 aria-hidden="true" />
                      </button>
                      <button
                        aria-label={`Change ${blog.title} status`}
                        onClick={() =>
                          onStatus(blog, blog.status === "Draft" ? "Published" : "Draft")
                        }
                      >
                        <MoreHorizontal aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={5}>
                    <div className="cms-empty">
                      <Search aria-hidden="true" />
                      <strong>No blogs found</strong>
                      <span>Try a different title or status filter.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="cms-table-footer">
          <span>
            Showing <strong>{blogs.length}</strong> {blogs.length === 1 ? "post" : "posts"}
          </span>
          <div>
            <button disabled aria-label="Previous page">
              <ChevronLeft aria-hidden="true" />
            </button>
            <span className="cms-page-number">1</span>
            <button disabled aria-label="Next page">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function BlogEditor({
  draft,
  categories,
  editing,
  onChange,
  onImage,
  onCancel,
  onPreview,
  onSave,
}: {
  draft: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string;
    slug: string;
    author: string;
    seoTitle: string;
    seoDescription: string;
    image: string;
  };
  categories: string[];
  editing: boolean;
  onChange: (
    key:
      | "title"
      | "excerpt"
      | "content"
      | "category"
      | "tags"
      | "slug"
      | "author"
      | "seoTitle"
      | "seoDescription",
    value: string,
  ) => void;
  onImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onPreview: () => void;
  onSave: (status: BlogStatus, event?: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <>
      <PageHeading
        eyebrow="Editorial studio"
        title={editing ? "Edit blog post" : "Create a new blog"}
        description="Write something useful. You can save a draft and come back to it any time."
      />
      <form className="cms-editor-layout" onSubmit={(event) => onSave("Published", event)}>
        <div className="cms-editor-main">
          <section className="cms-card cms-editor-card">
            <div className="cms-field">
              <label htmlFor="blog-title">
                Blog title <span>*</span>
              </label>
              <input
                id="blog-title"
                maxLength={120}
                required
                value={draft.title}
                onChange={(event) => onChange("title", event.target.value)}
                placeholder="Give your article a clear, helpful title"
              />
              <small>{draft.title.length}/120 characters</small>
            </div>
            <div className="cms-field">
              <label htmlFor="blog-excerpt">
                Description / excerpt <span>*</span>
              </label>
              <textarea
                id="blog-excerpt"
                rows={3}
                maxLength={240}
                required
                value={draft.excerpt}
                onChange={(event) => onChange("excerpt", event.target.value)}
                placeholder="A short introduction that helps readers know what they’ll learn"
              />
              <small>{draft.excerpt.length}/240 characters</small>
            </div>
            <div className="cms-rich-label">
              <label htmlFor="blog-content">
                Article content <span>*</span>
              </label>
              <div className="cms-format-toolbar" aria-label="Formatting options">
                <button
                  type="button"
                  title="Bold"
                  onClick={() => onChange("content", `${draft.content} **bold text**`)}
                >
                  <strong>B</strong>
                </button>
                <button
                  type="button"
                  title="Italic"
                  onClick={() => onChange("content", `${draft.content} *italic text*`)}
                >
                  <em>I</em>
                </button>
                <button
                  type="button"
                  title="Heading"
                  onClick={() => onChange("content", `${draft.content}\n\n## Section heading`)}
                >
                  H2
                </button>
                <span />
                <button
                  type="button"
                  title="Bullet list"
                  onClick={() => onChange("content", `${draft.content}\n\n- List item`)}
                >
                  • List
                </button>
                <button
                  type="button"
                  title="Quote"
                  onClick={() => onChange("content", `${draft.content}\n\n> Quote`)}
                >
                  “ ”
                </button>
                <span />
                <button
                  type="button"
                  title="Insert link"
                  onClick={() =>
                    onChange("content", `${draft.content} [link text](https://example.com)`)
                  }
                >
                  <ArrowUpRight aria-hidden="true" />
                </button>
              </div>
            </div>
            <textarea
              id="blog-content"
              className="cms-content-editor"
              rows={14}
              required
              value={draft.content}
              onChange={(event) => onChange("content", event.target.value)}
              placeholder="Start writing your article…"
            />
            <div className="cms-editor-hint">
              <span>Write in plain text or use the toolbar for simple Markdown formatting.</span>
              <span>
                {draft.content.trim()
                  ? `${draft.content.trim().split(/\s+/).length} words`
                  : "0 words"}
              </span>
            </div>
          </section>
          <section className="cms-card cms-editor-card">
            <div className="cms-section-title">
              <div>
                <h2>Search engine preview</h2>
                <p>Help your article show up clearly in search results.</p>
              </div>
              <Search aria-hidden="true" />
            </div>
            <div className="cms-field">
              <label htmlFor="seo-title">Meta title</label>
              <input
                id="seo-title"
                maxLength={70}
                value={draft.seoTitle}
                onChange={(event) => onChange("seoTitle", event.target.value)}
                placeholder="Search-friendly title"
              />
              <small>{draft.seoTitle.length}/70 characters</small>
            </div>
            <div className="cms-field">
              <label htmlFor="seo-description">Meta description</label>
              <textarea
                id="seo-description"
                rows={3}
                maxLength={160}
                value={draft.seoDescription}
                onChange={(event) => onChange("seoDescription", event.target.value)}
                placeholder="Summarise this article for search engines"
              />
              <small>{draft.seoDescription.length}/160 characters</small>
            </div>
            <div className="cms-search-preview">
              <span>charteredsolution.com › insights › {draft.slug || "your-blog-slug"}</span>
              <strong>{draft.seoTitle || draft.title || "Your article title"}</strong>
              <p>
                {draft.seoDescription ||
                  draft.excerpt ||
                  "Your article description will appear in search results here."}
              </p>
            </div>
          </section>
        </div>
        <aside className="cms-editor-aside">
          <section className="cms-card cms-editor-card">
            <div className="cms-section-title">
              <div>
                <h2>Publish settings</h2>
                <p>Choose how this article appears.</p>
              </div>
              <Settings2 aria-hidden="true" />
            </div>
            <div className="cms-field">
              <label htmlFor="blog-status">Status</label>
              <div className="cms-select-wrap">
                <select id="blog-status" value="Published">
                  <option value="Published">Ready to publish</option>
                </select>
                <ChevronDown aria-hidden="true" />
              </div>
              <small>Publishing requires the live CMS connection.</small>
            </div>
            <div className="cms-field">
              <label htmlFor="blog-date">Publish date</label>
              <div className="cms-date-input">
                <CalendarDays aria-hidden="true" />
                <input
                  id="blog-date"
                  type="date"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                />
              </div>
            </div>
            <div className="cms-field">
              <label htmlFor="blog-author">Author name</label>
              <input
                id="blog-author"
                value={draft.author}
                onChange={(event) => onChange("author", event.target.value)}
              />
            </div>
          </section>
          <section className="cms-card cms-editor-card">
            <div className="cms-section-title">
              <div>
                <h2>Featured image</h2>
                <p>Recommended: 1200 × 630px</p>
              </div>
              <ImagePlus aria-hidden="true" />
            </div>
            <label className={`cms-upload ${draft.image ? "has-image" : ""}`}>
              {draft.image ? (
                <>
                  <img src={draft.image} alt="Featured image preview" />
                  <span>Change image</span>
                </>
              ) : (
                <>
                  <Upload aria-hidden="true" />
                  <strong>Click to upload</strong>
                  <span>PNG, JPG or WebP · up to 5 MB</span>
                </>
              )}
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={onImage}
                aria-label="Upload featured image"
              />
            </label>
          </section>
          <section className="cms-card cms-editor-card">
            <div className="cms-section-title">
              <div>
                <h2>Organise</h2>
                <p>Help readers find related content.</p>
              </div>
              <FolderOpen aria-hidden="true" />
            </div>
            <div className="cms-field">
              <label htmlFor="blog-category">Category</label>
              <div className="cms-select-wrap">
                <select
                  id="blog-category"
                  value={draft.category}
                  onChange={(event) => onChange("category", event.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown aria-hidden="true" />
              </div>
            </div>
            <div className="cms-field">
              <label htmlFor="blog-tags">Tags</label>
              <input
                id="blog-tags"
                value={draft.tags}
                onChange={(event) => onChange("tags", event.target.value)}
                placeholder="GST, business, compliance"
              />
              <small>Separate tags with commas.</small>
            </div>
            <div className="cms-field">
              <label htmlFor="blog-slug">Custom URL slug</label>
              <div className="cms-slug-input">
                <span>/insights/</span>
                <input
                  id="blog-slug"
                  value={draft.slug}
                  onChange={(event) => onChange("slug", slugify(event.target.value))}
                  placeholder="your-article-slug"
                />
              </div>
            </div>
          </section>
        </aside>
        <div className="cms-editor-actions">
          <button type="button" className="cms-secondary-button" onClick={onCancel}>
            Cancel
          </button>
          <span className="cms-editor-action-spacer" />
          <button type="button" className="cms-secondary-button" onClick={onPreview}>
            <ArrowUpRight aria-hidden="true" /> Preview
          </button>
          <button type="button" className="cms-secondary-button" onClick={() => onSave("Draft")}>
            Save as draft
          </button>
          <button type="submit" className="cms-primary-button">
            <Check aria-hidden="true" /> Publish
          </button>
        </div>
      </form>
    </>
  );
}

function Categories({
  categories,
  categoryName,
  onName,
  onAdd,
  onDelete,
}: {
  categories: { name: string; count: number; color: string }[];
  categoryName: string;
  onName: (value: string) => void;
  onAdd: (event: FormEvent<HTMLFormElement>) => void;
  onDelete: (name: string) => void;
}) {
  return (
    <>
      <PageHeading
        eyebrow="Content organisation"
        title="Categories"
        description="Group related articles so readers can explore what matters to them."
      />
      <div className="cms-category-layout">
        <section className="cms-card cms-category-list">
          <div className="cms-card-heading">
            <div>
              <h2>Your categories</h2>
              <p>{categories.length} content themes</p>
            </div>
            <span className="cms-category-total">
              <FolderOpen aria-hidden="true" />
              {categories.length}
            </span>
          </div>
          <div className="cms-category-table">
            <div className="cms-category-header">
              <span>Category</span>
              <span>Blogs</span>
              <span>
                <span className="sr-only">Actions</span>
              </span>
            </div>
            {categories.map((category) => (
              <div className="cms-category-row" key={category.name}>
                <span className="cms-category-name">
                  <i className={category.color} />
                  {category.name}
                </span>
                <span className="cms-category-count">{category.count}</span>
                <button
                  aria-label={`Delete ${category.name}`}
                  onClick={() => onDelete(category.name)}
                >
                  <Trash2 aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="cms-card cms-add-category">
          <div className="cms-add-category-icon">
            <Plus aria-hidden="true" />
          </div>
          <h2>Create a category</h2>
          <p>Give a new topic a clear name so your blog posts are easier to browse.</p>
          <form onSubmit={onAdd}>
            <label htmlFor="category-name">Category name</label>
            <input
              id="category-name"
              required
              maxLength={40}
              value={categoryName}
              onChange={(event) => onName(event.target.value)}
              placeholder="e.g. Startup guides"
            />
            <button className="cms-primary-button" type="submit">
              <Plus aria-hidden="true" /> Add category
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

function Profile() {
  return (
    <>
      <PageHeading
        eyebrow="Personal settings"
        title="Profile & account"
        description="Manage your author profile and preferences for the editorial workspace."
      />
      <div className="cms-profile-layout">
        <section className="cms-card cms-profile-card">
          <div className="cms-profile-cover">
            <div className="cms-profile-avatar">JM</div>
          </div>
          <div className="cms-profile-body">
            <div className="cms-profile-name">
              <div>
                <h2>Jitendra Malviya</h2>
                <span>Administrator profile · preview only</span>
              </div>
              <button className="cms-secondary-button" disabled>
                <Pencil aria-hidden="true" /> Edit profile
              </button>
            </div>
            <div className="cms-profile-fields">
              <div>
                <span>AUTHOR NAME</span>
                <strong>Jitendra Malviya</strong>
              </div>
              <div>
                <span>BUSINESS</span>
                <strong>Chartered Solution</strong>
              </div>
              <div>
                <span>WEBSITE</span>
                <strong>charteredsolution.com</strong>
              </div>
              <div>
                <span>ACCOUNT ACCESS</span>
                <strong>Authentication not yet configured</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="cms-card cms-security-card">
          <span className="cms-security-icon">
            <Settings2 aria-hidden="true" />
          </span>
          <h2>Account security</h2>
          <p>
            Admin sign-in and account controls will be available once secure authentication is
            connected.
          </p>
          <div className="cms-security-note">
            <CircleHelp aria-hidden="true" />
            <span>
              For your protection, this preview does not accept passwords or create administrator
              accounts.
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

function BlogPreview({ blog, onClose }: { blog: Blog; onClose: () => void }) {
  return (
    <div
      className="cms-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="cms-preview-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
      >
        <div className="cms-preview-modal-top">
          <span>ARTICLE PREVIEW · {blog.status.toUpperCase()}</span>
          <button onClick={onClose} aria-label="Close preview">
            <X aria-hidden="true" />
          </button>
        </div>
        <img className="cms-preview-cover" src={blog.image} alt="" />
        <div className="cms-preview-article">
          <span className="cms-preview-category">{blog.category}</span>
          <h2 id="preview-title">{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <div className="cms-blog-meta">
            By {blog.author}
            <span />
            {blog.date}
            <span />
            {blog.readTime}
          </div>
          <div className="cms-preview-divider" />
          <p className="cms-preview-body">
            {blog.id === 0
              ? "Your article preview will look like this when published. Connect the CMS backend to share it with your readers."
              : "This sample preview gives you an idea of how your article will appear. Full article content is available when the publishing backend is connected."}
          </p>
        </div>
        <div className="cms-preview-modal-footer">
          <span>charteredsolution.com/insights/{blog.slug}</span>
          <button className="cms-secondary-button" onClick={onClose}>
            Close preview
          </button>
        </div>
      </section>
    </div>
  );
}
