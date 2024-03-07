import { NextResponse } from 'next/server';
import Project from '../../models/Project';

export async function POST(req) {
  try {
    const body = await req.json();
    const projectData = body.formData;

    await Project.create(projectData);

    return NextResponse.json({ message: 'Project Created' }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}

export async function GET() {
  try {
    const projects = await Project.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}
