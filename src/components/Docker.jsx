import { LinkedInLogoIcon, TwitterLogoIcon, InstagramLogoIcon, GitHubLogoIcon, ResumeIcon } from '@radix-ui/react-icons'
import { Dock, DockIcon } from './magicui/dock'
import { Linkedin, Mail, TwitchIcon } from 'lucide-react'
import Link from 'next/link'

export default function Docker() {
    return (
        <Dock>
            <DockIcon>
                <Link target='_blank' href='https://www.linkedin.com/in/srisanth-seth-51b54b225/'>
                    <Linkedin className='h-6 w-6' />
                </Link>
            </DockIcon>
            <DockIcon>
                <Link target='_blank' href='https://x.com/SrisanthSeth'>
                    <TwitterLogoIcon className='h-6 w-6' />
                </Link>
            </DockIcon>
            <DockIcon>
                <Link target='_blank' href='https://www.instagram.com/sri_santh._/'>
                    <InstagramLogoIcon className='h-6 w-6' />
                </Link>
            </DockIcon>
            <DockIcon>
                <Link target='_blank' href='https://github.com/sri766'>
                    <GitHubLogoIcon className='h-6 w-6' />
                </Link>
            </DockIcon>
            <DockIcon>
                <Link target='_blank' href='mailto:srisanthseth28@gmail.com'>
                    <Mail className='h-6 w-6' />
                </Link>
            </DockIcon>
            <DockIcon>
                <Link target='_blank' href='https://drive.google.com/file/d/1azh7k16emQAxGMDYNpErs-kGizpl_cxy/view'>
                    <ResumeIcon className='h-6 w-6' />
                </Link>
            </DockIcon>
        </Dock>
    )
}
