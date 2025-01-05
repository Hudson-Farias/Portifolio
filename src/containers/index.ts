import About from '@/containers/about'
import Skills from '@/containers/skills'
import Projects from '@/containers/projects'
import { redirect } from 'next/dist/server/api-utils'

export const containers = [
    {
        id: 'about',
        label: 'Sobre',
        children: About,
        redirect_path: '/#about'
    },
    {
        id: 'skills',
        label: 'Skills',
        children: Skills,
        redirect_path: '/#skills'
    },
    // {
    //     id: 'projects',
    //     label: 'Projetos',
    //     children: Projects
    // }
]