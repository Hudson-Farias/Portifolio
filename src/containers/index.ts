import About from '@/containers/about'
import Skills from '@/containers/skills'
import Projects from '@/containers/projects'

export const containers = [
    {
        id: 'about',
        label: 'Sobre',
        children: About
    },
    {
        id: 'skills',
        label: 'Skills',
        children: Skills
    },
    // {
    //     id: 'projects',
    //     label: 'Projetos',
    //     children: Projects
    // }
]