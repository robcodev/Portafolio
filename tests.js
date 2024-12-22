import supabase from "./src/utils/supabase.js";

const fetchProjects = async () => {
    const { data: projects, error } = await supabase
        .from('Projects') // Replace this with the name of your table
        .select('name'); // Adjust the fields you need to select

    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }

    console.log('Fetched projects:', projects); // 'projects' is an array of objects
    return projects;
};

// Call and use the function
fetchProjects().then((projects) => {
    projects.forEach((project) => {
        console.log(project.name); // Accessing the project names
    });
});