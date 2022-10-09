import Project from "./Project";

export default function ProjectContainer({ data }) {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((project) => (
                <Project
                    bgImg={project.bgImg}
                    title={project.title}
                    linkCode={project.linkCode}
                    linkLive={project.linkLive}
                />
            ))}
        </div>
    );
}
