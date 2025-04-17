"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const PostPropertyForm = () => {
  const [title, setTitle] = useState("");
    //const router = useRouter();


  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(null);
    const { error } = await supabase.from("properties").insert([
      {
        title,
        description,
        price,
        property_type: "Apartment",
      },
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Property posted successfully!");
      setTitle("");
      setDescription("");
      setPrice("");
    }
  };

  return (
    <div>
      <h1>Post Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          Post Property
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostPropertyForm;