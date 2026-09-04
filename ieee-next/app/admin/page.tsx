"use client";

import { useState, useEffect } from "react";
import { Users, CalendarDays, Image as ImageIcon, Newspaper, Plus, Pencil, Trash2, X} from "lucide-react";
import { getTeam } from "@/services/team.service";
import { getEvent } from "@/services/event.service";
import { getGallery } from "@/services/gallery.service";
import { getNews } from "@/services/news.service";

type Section = "members" | "events" | "gallery" | "news";

type Member = {
  _id: number;
  name: string;
  role: string;
  email: string;
};

type Event = {
  _id: number;
  title: string;
  date: string;
  location: string;
};

type GalleryImage = {
  _id: number;
  title: string;
  category: string;
  src: string;
};

type News = {
  _id: number;
  title: string;
  date: string;
  description: string;
};

export default function AdminPage() {
  const [section, setSection] = useState<Section>("members");
  const [showForm, setShowForm] = useState(false);

  const [team, setTeam] = useState<Member[]>([
    {
      _id: 1,
      name: "Neha Pal",
      role: "Chair",
      email: "nehapal@example.com",
    },
    {
      _id: 2,
      name: "Jane Doe",
      role: "Secretary",
      email: "jane@example.com",
    },
  ]);

  const [events, setEvents] = useState<Event[]>([
    {
      _id: 1,
      title: "IEEE Hackathon 2026",
      date: "2026-09-20",
      location: "Everest Engineering College",
    },
  ]);

  const [gallery, setGallery] = useState<GalleryImage[]>([
    {
      _id: 1,
      title: "Hackathon Night",
      category: "Coding Competitions",
      src: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600",
    },
  ]);

  const [news, setNews] = useState<News[]>([
    {
      _id: 1,
      title: "IEEE Student Branch Wins Hackathon",
      date: "2026-08-30",
      description:
        "Our team successfully participated in the hackathon.",
    },
  ]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const event_data = await getEvent();
        const news_data = await getNews();
        const team_data = await getTeam();
        const Gallery_data = await getGallery();


        console.log("Admin got events:", event_data);

        setEvents(event_data);
        setNews(news_data);
        setTeam(team_data);
        setGallery(Gallery_data);

      } catch (error) {
        console.error("Failed to load events:", error);
      }
    }

    loadEvents();
  }, []);

  const sectionInfo = {
    members: {
      title: "Members",
      description: "Manage IEEE student branch members",
      icon: Users,
      button: "Add Member",
    },

    events: {
      title: "Events",
      description: "Create and manage upcoming events",
      icon: CalendarDays,
      button: "Add Event",
    },

    gallery: {
      title: "Gallery",
      description: "Manage images and event memories",
      icon: ImageIcon,
      button: "Upload Image",
    },

    news: {
      title: "News",
      description: "Create and manage IEEE news",
      icon: Newspaper,
      button: "Add News",
    },
  };

  const current = sectionInfo[section];
  const Icon = current.icon;

  function changeSection(newSection: Section) {
    setSection(newSection);
    setShowForm(false);
  }

  function handleDelete(_id: number) {
    const confirmed = confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmed) return;

    if (section === "members") {
      setTeam((prev) =>
        prev.filter((item) => item._id !== _id)
      );
    }

    if (section === "events") {
      setEvents((prev) =>
        prev.filter((item) => item._id !== _id)
      );
    }

    if (section === "gallery") {
      setGallery((prev) =>
        prev.filter((item) => item._id !== _id)
      );
    }

    if (section === "news") {
      setNews((prev) =>
        prev.filter((item) => item._id !== _id)
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F7FA]">

      {/* ================= HEADER ================= */}

      <header className="bg-gradient-to-br from-[#001220] via-[#00629B] to-[#001220] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-7">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-xl font-bold">
                IEEE
              </span>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Admin Panel
              </h1>

              <p className="text-sm text-white/70 mt-1">
                Manage your IEEE Student Branch website
              </p>
            </div>

          </div>

        </div>
      </header>


      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* ================= TABS ================= */}

        <div className="bg-white border border-[#DCE8EF] rounded-2xl p-2 shadow-sm mb-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

            <Tab
              active={section === "members"}
              icon={Users}
              label="Members"
              onClick={() => changeSection("members")}
            />

            <Tab
              active={section === "events"}
              icon={CalendarDays}
              label="Events"
              onClick={() => changeSection("events")}
            />

            <Tab
              active={section === "gallery"}
              icon={ImageIcon}
              label="Gallery"
              onClick={() => changeSection("gallery")}
            />

            <Tab
              active={section === "news"}
              icon={Newspaper}
              label="News"
              onClick={() => changeSection("news")}
            />

          </div>

        </div>


        {/* ================= SECTION HEADER ================= */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-[#E5F2F8] text-[#00629B] flex items-center justify-center">
              <Icon size={24} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-[#001220]">
                {current.title}
              </h2>

              <p className="text-[#607D8B] text-sm">
                {current.description}
              </p>

            </div>

          </div>


          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 bg-[#00629B] hover:bg-[#004F7A] text-white px-5 py-3 rounded-xl font-medium transition"
          >
            {showForm ? (
              <>
                <X size={18} />
                Close
              </>
            ) : (
              <>
                <Plus size={18} />
                {current.button}
              </>
            )}
          </button>

        </div>


        {/* ================= FORM ================= */}

        {showForm && (
          <div className="bg-white border border-[#DCE8EF] rounded-2xl shadow-sm p-6 mb-8">

            {section === "members" && (
              <MemberForm
                onClose={() => setShowForm(false)}
              />
            )}

            {section === "events" && (
              <EventForm
                onClose={() => setShowForm(false)}
              />
            )}

            {section === "gallery" && (
              <GalleryForm
                onClose={() => setShowForm(false)}
              />
            )}

            {section === "news" && (
              <NewsForm
                onClose={() => setShowForm(false)}
              />
            )}

          </div>
        )}


        {/* ================= CONTENT ================= */}

        {section === "members" && (
          <MemberTable
            members={team}
            onDelete={handleDelete}
          />
        )}

        {section === "events" && (
          <EventTable
            events={events}
            onDelete={handleDelete}
          />
        )}

        {section === "gallery" && (
          <GalleryGrid
            gallery={gallery}
            onDelete={handleDelete}
          />
        )}

        {section === "news" && (
          <NewsTable
            news={news}
            onDelete={handleDelete}
          />
        )}

      </main>

    </div>
  );
}


/* =========================================================
   TAB
========================================================= */

function Tab({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: any;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition ${
        active
          ? "bg-[#00629B] text-white shadow-sm"
          : "text-[#607D8B] hover:bg-[#E5F2F8] hover:text-[#00629B]"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}


/* =========================================================
   MEMBERS
========================================================= */

function MemberTable({
  members,
  onDelete,
}: {
  members: Member[];
  onDelete: (_id: number) => void;
}) {
  if (members.length === 0) {
    return <EmptyState text="No members found." />;
  }

  return (
    <div className="bg-white border border-[#DCE8EF] rounded-2xl shadow-sm overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#F3F7FA] border-b border-[#DCE8EF]">

            <tr>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Name
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Role
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Email
              </th>

              <th className="text-right px-6 py-4 text-sm font-semibold text-[#001220]">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {members.map((member) => (
              <tr
                key={member._id}
                className="border-b border-[#EDF3F6] last:border-0 hover:bg-[#F8FBFD] transition"
              >

                <td className="px-6 py-4 font-medium text-[#001220]">
                  {member.name}
                </td>

                <td className="px-6 py-4">

                  <span className="inline-flex px-3 py-1 rounded-full bg-[#E5F2F8] text-[#00629B] text-sm font-medium">
                    {member.role}
                  </span>

                </td>

                <td className="px-6 py-4 text-[#607D8B]">
                  {member.email}
                </td>

                <td className="px-6 py-4">
                  <Actions
                    onDelete={() => onDelete(member._id)}
                  />
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}


/* =========================================================
   EVENTS
========================================================= */

function EventTable({
  events,
  onDelete,
}: {
  events: Event[];
  onDelete: (_id: number) => void;
}) {
  if (events.length === 0) {
    return <EmptyState text="No events found." />;
  }

  return (
    <div className="bg-white border border-[#DCE8EF] rounded-2xl shadow-sm overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#F3F7FA] border-b border-[#DCE8EF]">

            <tr>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Event
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Date
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Location
              </th>

              <th className="text-right px-6 py-4 text-sm font-semibold text-[#001220]">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {events.map((event) => (
              <tr
                key={event._id}
                className="border-b border-[#EDF3F6] last:border-0 hover:bg-[#F8FBFD] transition"
              >

                <td className="px-6 py-4 font-medium text-[#001220]">
                  {event.title}
                </td>

                <td className="px-6 py-4 text-[#607D8B]">
                  {event.date}
                </td>

                <td className="px-6 py-4 text-[#607D8B]">
                  {event.location}
                </td>

                <td className="px-6 py-4">
                  <Actions
                    onDelete={() => onDelete(event._id)}
                  />
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}


/* =========================================================
   GALLERY
========================================================= */

function GalleryGrid({
  gallery,
  onDelete,
}: {
  gallery: GalleryImage[];
  onDelete: (_id: number) => void;
}) {
  if (gallery.length === 0) {
    return <EmptyState text="No gallery images found." />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {gallery.map((image) => (
        <div
          key={image._id}
          className="bg-white border border-[#DCE8EF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
        >

          <div className="aspect-video overflow-hidden bg-[#F3F7FA]">

            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />

          </div>

          <div className="p-5">

            <div className="flex items-start justify-between gap-4">

              <div>

                <h3 className="font-semibold text-[#001220]">
                  {image.title}
                </h3>

                <p className="text-sm text-[#607D8B] mt-1">
                  {image.category}
                </p>

              </div>

              <button
                onClick={() => onDelete(image._id)}
                className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition"
              >
                <Trash2 size={17} />
              </button>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}


/* =========================================================
   NEWS
========================================================= */

function NewsTable({
  news,
  onDelete,
}: {
  news: News[];
  onDelete: (_id: number) => void;
}) {
  if (news.length === 0) {
    return <EmptyState text="No news found." />;
  }

  return (
    <div className="bg-white border border-[#DCE8EF] rounded-2xl shadow-sm overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#F3F7FA] border-b border-[#DCE8EF]">

            <tr>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Title
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Date
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-[#001220]">
                Description
              </th>

              <th className="text-right px-6 py-4 text-sm font-semibold text-[#001220]">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {news.map((item) => (
              <tr
                key={item._id}
                className="border-b border-[#EDF3F6] last:border-0 hover:bg-[#F8FBFD] transition"
              >

                <td className="px-6 py-4 font-medium text-[#001220]">
                  {item.title}
                </td>

                <td className="px-6 py-4 text-[#607D8B]">
                  {item.date}
                </td>

                <td className="px-6 py-4 text-[#607D8B] max-w-md">
                  {item.description}
                </td>

                <td className="px-6 py-4">
                  <Actions
                    onDelete={() => onDelete(item._id)}
                  />
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}


/* =========================================================
   ACTIONS
========================================================= */

function Actions({
  onDelete,
}: {
  onDelete: () => void;
}) {
  return (
    <div className="flex items-center justify-end gap-2">

      <button
        className="p-2 rounded-lg text-[#00629B] hover:bg-[#E5F2F8] transition"
        title="Edit"
      >
        <Pencil size={17} />
      </button>

      <button
        onClick={onDelete}
        className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition"
        title="Delete"
      >
        <Trash2 size={17} />
      </button>

    </div>
  );
}


/* =========================================================
   MEMBER FORM
========================================================= */

function MemberForm({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <form className="space-y-5">

      <div>

        <h3 className="text-lg font-semibold text-[#001220]">
          Add Member
        </h3>

        <p className="text-sm text-[#607D8B] mt-1">
          Add a new IEEE student branch member.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <Input
          label="Name"
          placeholder="Enter member name"
        />

        <Input
          label="Role"
          placeholder="Enter role"
        />

      </div>

      <Input
        label="Email"
        type="email"
        placeholder="Enter email address"
      />

      <FileInput
        label="Member Image"
      />

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-[#CFDEE6] text-[#607D8B] hover:bg-[#F3F7FA] transition"
        >
          Cancel
        </button>

        <SubmitButton text="Create Member" />

      </div>

    </form>
  );
}


/* =========================================================
   EVENT FORM
========================================================= */

function EventForm({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <form className="space-y-5">

      <div>

        <h3 className="text-lg font-semibold text-[#001220]">
          Add Event
        </h3>

        <p className="text-sm text-[#607D8B] mt-1">
          Create a new IEEE event.
        </p>

      </div>

      <Input
        label="Event Title"
        placeholder="Enter event title"
      />

      <div className="grid md:grid-cols-2 gap-5">

        <Input
          label="Date"
          type="date"
        />

        <Input
          label="Location"
          placeholder="Enter event location"
        />

      </div>

      <FileInput
        label="Event Image"
      />

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-[#CFDEE6] text-[#607D8B] hover:bg-[#F3F7FA] transition"
        >
          Cancel
        </button>

        <SubmitButton text="Create Event" />

      </div>

    </form>
  );
}


/* =========================================================
   GALLERY FORM
========================================================= */

function GalleryForm({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <form className="space-y-5">

      <div>

        <h3 className="text-lg font-semibold text-[#001220]">
          Upload Gallery Image
        </h3>

        <p className="text-sm text-[#607D8B] mt-1">
          Add a new image to the IEEE gallery.
        </p>

      </div>

      <Input
        label="Title"
        placeholder="Enter image title"
      />

      <Input
        label="Category"
        placeholder="Example: Coding Competitions"
      />

      <FileInput
        label="Image"
        accept="image/*"
      />

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-[#CFDEE6] text-[#607D8B] hover:bg-[#F3F7FA] transition"
        >
          Cancel
        </button>

        <SubmitButton text="Upload Image" />

      </div>

    </form>
  );
}


/* =========================================================
   NEWS FORM
========================================================= */

function NewsForm({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <form className="space-y-5">

      <div>

        <h3 className="text-lg font-semibold text-[#001220]">
          Add News
        </h3>

        <p className="text-sm text-[#607D8B] mt-1">
          Publish a new IEEE news article.
        </p>

      </div>

      <Input
        label="Title"
        placeholder="Enter news title"
      />

      <Input
        label="Date"
        type="date"
      />

      <div>

        <label className="block text-sm font-medium text-[#001220] mb-2">
          Description
        </label>

        <textarea
          rows={5}
          placeholder="Write news description..."
          className="w-full px-4 py-3 rounded-xl border border-[#CFDEE6] outline-none focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/10 resize-none"
        />

      </div>

      <FileInput
        label="News Image"
        accept="image/*"
      />

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-[#CFDEE6] text-[#607D8B] hover:bg-[#F3F7FA] transition"
        >
          Cancel
        </button>

        <SubmitButton text="Create News" />

      </div>

    </form>
  );
}


/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>

      <label className="block text-sm font-medium text-[#001220] mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-[#CFDEE6] outline-none focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/10"
      />

    </div>
  );
}


/* =========================================================
   FILE INPUT
========================================================= */

function FileInput({
  label,
  accept = "image/*",
}: {
  label: string;
  accept?: string;
}) {
  return (
    <div>

      <label className="block text-sm font-medium text-[#001220] mb-2">
        {label}
      </label>

      <input
        type="file"
        accept={accept}
        className="w-full px-4 py-3 rounded-xl border border-[#CFDEE6] bg-white text-sm text-[#607D8B] file:mr-4 file:rounded-lg file:border-0 file:bg-[#E5F2F8] file:px-4 file:py-2 file:text-[#00629B] file:font-medium"
      />

    </div>
  );
}


/* =========================================================
   SUBMIT BUTTON
========================================================= */

function SubmitButton({
  text,
}: {
  text: string;
}) {
  return (
    <button
      type="submit"
      className="px-5 py-2.5 rounded-xl bg-[#00629B] hover:bg-[#004F7A] text-white font-medium transition"
    >
      {text}
    </button>
  );
}


/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({
  text,
}: {
  text: string;
}) {
  return (
    <div className="bg-white border border-[#DCE8EF] rounded-2xl p-12 text-center">

      <div className="w-14 h-14 mx-auto rounded-full bg-[#E5F2F8] text-[#00629B] flex items-center justify-center mb-4">
        <Users size={24} />
      </div>

      <p className="text-[#607D8B]">
        {text}
      </p>

    </div>
  );
}