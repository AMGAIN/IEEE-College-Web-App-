"use client";

import { useState } from "react";
import {
  Users,
  CalendarDays,
  Image as ImageIcon,
  Newspaper,
  Plus,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

type Section = "members" | "events" | "gallery" | "news";

type Member = {
  id: number;
  name: string;
  role: string;
  email: string;
};

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
};

type GalleryImage = {
  id: number;
  title: string;
  category: string;
  src: string;
};

type News = {
  id: number;
  title: string;
  date: string;
  description: string;
};

export default function AdminPage() {
  const [section, setSection] = useState<Section>("members");
  const [showForm, setShowForm] = useState(false);

  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "John Doe",
      role: "Chairman",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Secretary",
      email: "jane@example.com",
    },
  ]);

  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "IEEE Hackathon 2026",
      date: "2026-09-20",
      location: "Everest Engineering College",
    },
  ]);

  const [gallery, setGallery] = useState<GalleryImage[]>([
    {
      id: 1,
      title: "Hackathon Night",
      category: "Coding Competitions",
      src: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600",
    },
  ]);

  const [news, setNews] = useState<News[]>([
    {
      id: 1,
      title: "IEEE Student Branch Wins Hackathon",
      date: "2026-08-30",
      description: "Our team successfully participated in the hackathon.",
    },
  ]);

  const sectionInfo = {
    members: {
      title: "Members",
      icon: Users,
      button: "Add Member",
    },
    events: {
      title: "Events",
      icon: CalendarDays,
      button: "Add Event",
    },
    gallery: {
      title: "Gallery",
      icon: ImageIcon,
      button: "Upload Image",
    },
    news: {
      title: "News",
      icon: Newspaper,
      button: "Add News",
    },
  };

  const current = sectionInfo[section];
  const Icon = current.icon;

  function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this item?")) {
      return;
    }

    if (section === "members") {
      setMembers((prev) => prev.filter((item) => item.id !== id));
    }

    if (section === "events") {
      setEvents((prev) => prev.filter((item) => item.id !== id));
    }

    if (section === "gallery") {
      setGallery((prev) => prev.filter((item) => item.id !== id));
    }

    if (section === "news") {
      setNews((prev) => prev.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-900">
            IEEE Admin Panel
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage members, events, gallery and news
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Tabs */}
        <div className="bg-white rounded-xl border p-2 flex gap-2 mb-8">

          <Tab
            active={section === "members"}
            onClick={() => {
              setSection("members");
              setShowForm(false);
            }}
            icon={<Users size={18} />}
            label="Members"
          />

          <Tab
            active={section === "events"}
            onClick={() => {
              setSection("events");
              setShowForm(false);
            }}
            icon={<CalendarDays size={18} />}
            label="Events"
          />

          <Tab
            active={section === "gallery"}
            onClick={() => {
              setSection("gallery");
              setShowForm(false);
            }}
            icon={<ImageIcon size={18} />}
            label="Gallery"
          />

          <Tab
            active={section === "news"}
            onClick={() => {
              setSection("news");
              setShowForm(false);
            }}
            icon={<Newspaper size={18} />}
            label="News"
          />

        </div>

        {/* Page heading */}
        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <Icon size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {current.title}
              </h2>

              <p className="text-gray-500 text-sm">
                Manage your {section}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
          >
            <Plus size={18} />
            {current.button}
          </button>

        </div>

        {/* Create / Update Form */}
        {showForm && (
          <div className="bg-white border rounded-xl p-6 mb-8">

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-lg font-semibold">
                {current.button}
              </h3>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <X size={20} />
              </button>

            </div>

            {section === "members" && <MemberForm />}
            {section === "events" && <EventForm />}
            {section === "gallery" && <GalleryForm />}
            {section === "news" && <NewsForm />}

          </div>
        )}

        {/* Content */}
        <div className="bg-white border rounded-xl overflow-hidden">

          {section === "members" && (
            <MemberTable
              members={members}
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

        </div>

      </main>
    </div>
  );
}

/* -------------------------------------------------- */
/* TAB */
/* -------------------------------------------------- */

function Tab({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

/* -------------------------------------------------- */
/* MEMBERS */
/* -------------------------------------------------- */

function MemberTable({
  members,
  onDelete,
}: {
  members: Member[];
  onDelete: (id: number) => void;
}) {
  return (
    <div className="divide-y">

      {members.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between p-5"
        >
          <div>
            <h3 className="font-semibold">
              {member.name}
            </h3>

            <p className="text-sm text-blue-600">
              {member.role}
            </p>

            <p className="text-sm text-gray-500">
              {member.email}
            </p>
          </div>

          <Actions
            onDelete={() => onDelete(member.id)}
          />
        </div>
      ))}

    </div>
  );
}

/* -------------------------------------------------- */
/* EVENTS */
/* -------------------------------------------------- */

function EventTable({
  events,
  onDelete,
}: {
  events: Event[];
  onDelete: (id: number) => void;
}) {
  return (
    <div className="divide-y">

      {events.map((event) => (
        <div
          key={event.id}
          className="flex items-center justify-between p-5"
        >
          <div>
            <h3 className="font-semibold">
              {event.title}
            </h3>

            <p className="text-sm text-gray-500">
              {event.date} • {event.location}
            </p>
          </div>

          <Actions
            onDelete={() => onDelete(event.id)}
          />
        </div>
      ))}

    </div>
  );
}

/* -------------------------------------------------- */
/* GALLERY */
/* -------------------------------------------------- */

function GalleryGrid({
  gallery,
  onDelete,
}: {
  gallery: GalleryImage[];
  onDelete: (id: number) => void;
}) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {gallery.map((image) => (
        <div
          key={image.id}
          className="border rounded-xl overflow-hidden"
        >

          <img
            src={image.src}
            alt={image.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">

            <h3 className="font-semibold">
              {image.title}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              {image.category}
            </p>

            <Actions
              onDelete={() => onDelete(image.id)}
            />

          </div>

        </div>
      ))}

    </div>
  );
}

/* -------------------------------------------------- */
/* NEWS */
/* -------------------------------------------------- */

function NewsTable({
  news,
  onDelete,
}: {
  news: News[];
  onDelete: (id: number) => void;
}) {
  return (
    <div className="divide-y">

      {news.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-5"
        >
          <div className="max-w-3xl">

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500">
              {item.date}
            </p>

            <p className="text-sm text-gray-600 mt-1">
              {item.description}
            </p>

          </div>

          <Actions
            onDelete={() => onDelete(item.id)}
          />

        </div>
      ))}

    </div>
  );
}

/* -------------------------------------------------- */
/* ACTIONS */
/* -------------------------------------------------- */

function Actions({
  onDelete,
}: {
  onDelete: () => void;
}) {
  return (
    <div className="flex gap-2">

      <button
        className="p-2 rounded-lg text-blue-600 hover:bg-blue-50"
        title="Edit"
      >
        <Pencil size={18} />
      </button>

      <button
        onClick={onDelete}
        className="p-2 rounded-lg text-red-600 hover:bg-red-50"
        title="Delete"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}

/* -------------------------------------------------- */
/* FORMS */
/* -------------------------------------------------- */

function MemberForm() {
  return (
    <form className="grid md:grid-cols-2 gap-5">

      <Input label="Name" placeholder="Member name" />

      <Input label="Role" placeholder="Chairman" />

      <Input label="Email" placeholder="member@example.com" />

      <div>
        <label className="block text-sm font-medium mb-2">
          Member Image
        </label>

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="md:col-span-2">
        <SubmitButton text="Save Member" />
      </div>

    </form>
  );
}

function EventForm() {
  return (
    <form className="grid md:grid-cols-2 gap-5">

      <Input label="Event Title" placeholder="IEEE Hackathon" />

      <Input label="Location" placeholder="Everest Engineering College" />

      <Input label="Date" type="date" />

      <Input label="Time" type="time" />

      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-2">
          Description
        </label>

        <textarea
          rows={5}
          className="w-full border rounded-lg p-3"
          placeholder="Event description..."
        />
      </div>

      <div className="md:col-span-2">
        <SubmitButton text="Save Event" />
      </div>

    </form>
  );
}

function GalleryForm() {
  return (
    <form className="space-y-5">

      <div>
        <label className="block text-sm font-medium mb-2">
          Image
        </label>

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <Input
        label="Title"
        placeholder="Hackathon Night"
      />

      <Input
        label="Category"
        placeholder="Coding Competitions"
      />

      <SubmitButton text="Upload Image" />

    </form>
  );
}

function NewsForm() {
  return (
    <form className="space-y-5">

      <Input
        label="News Title"
        placeholder="IEEE Student Branch..."
      />

      <div>
        <label className="block text-sm font-medium mb-2">
          Description
        </label>

        <textarea
          rows={7}
          className="w-full border rounded-lg p-3"
          placeholder="Write your news..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          News Image
        </label>

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <SubmitButton text="Publish News" />

    </form>
  );
}

/* -------------------------------------------------- */
/* REUSABLE INPUT */
/* -------------------------------------------------- */

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
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

/* -------------------------------------------------- */
/* SUBMIT BUTTON */
/* -------------------------------------------------- */

function SubmitButton({
  text,
}: {
  text: string;
}) {
  return (
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
    >
      {text}
    </button>
  );
}