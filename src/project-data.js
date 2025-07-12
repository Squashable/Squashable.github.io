export const mainProjects = [
  {
    path: 'turret',
    title: 'AI Turret',
    text: 'A project involving computer vision and robotics to track and aim at targets.',
    image: '/me.jpg',
  },
  {
    path: 'model-rail',
    title: 'Model Rail',
    text: 'A model railway project with custom electronics and automation.',
    image: '/me.jpg',
  },
  {
    path: 'website-project',
    title: 'Portfolio Website',
    text: 'The React-based portfolio website you are currently viewing.',
    image: '/me.jpg',
  },
];

export const futureProjects = Array.from({ length: 7 }, (_, i) => {
  const num = String(i + 4).padStart(2, '0');
  return {
    path: `project${num}`,
    title: `Future Project ${num}`,
    text: 'Details coming soon for a new and exciting project. Stay tuned!',
    image: '/me.jpg',
  };
});

export const uniProjects = Array.from({ length: 10 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return {
      path: `uni-project${num}`,
      title: `University Project ${num}`,
      text: 'A project from my university studies. Details coming soon.',
      image: '/me.jpg',
    };
});

export const allProjectsForHomePage = [...mainProjects, ...futureProjects];