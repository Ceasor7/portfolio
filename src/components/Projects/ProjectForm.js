'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProjectForm = () => {
  const router = useRouter();

  const startingProjectData = {
    ptitle: '',
    description: '',
    glink: '',
    dlink: '',
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/Projects', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      //@ts-ignore
      'Content-Type': 'application/json',
    });

    if (!res.ok) {
      throw new Error('Failed to create ticket');
    }

    router.refresh();
    router.push('/');
  };

  const [formData, setFormData] = useState(startingProjectData);

  return (
    <div className="flex flex-col">
      <form method="post" className="flex flex-col" onSubmit={handleSubmit}>
        <h1>Add Project to database</h1>
        <label>Title</label>
        <input
          id="ptitle"
          name="ptitle"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.ptitle}
          className="border w-80 p-2 mb-4"
        />
        <label>description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          rows={5}
          onChange={handleChange}
          required={true}
          value={formData.description}
          className="border w-80 p-2 mb-4"
        />
        <label>Github Link</label>
        <input
          id="glink"
          name="glink"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.glink}
          className="border w-80 p-2 mb-4"
        />
        <label>Deployment link</label>
        <input
          id="dlink"
          name="dlink"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.dlink}
          className="border w-80 p-2 mb-4"
        />
        <input type="submit" className="bg-red" value="Upload Project" />
      </form>
    </div>
  );
};

export default ProjectForm;
