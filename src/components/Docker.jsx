import { LinkedInLogoIcon, TwitterLogoIcon, InstagramLogoIcon, GitHubLogoIcon, ResumeIcon } from '@radix-ui/react-icons'
import { Dock, DockIcon } from './magicui/dock'
import { Linkedin, Mail, TwitchIcon } from 'lucide-react'

export default function Docker() {
    return (
        <Dock>
            <DockIcon>
                <Linkedin className='h-6 w-6' />
            </DockIcon>
            <DockIcon>
                <TwitterLogoIcon className='h-6 w-6' />
            </DockIcon>
            <DockIcon>
                <InstagramLogoIcon className='h-6 w-6' />
            </DockIcon>
            <DockIcon>
                <GitHubLogoIcon className='h-6 w-6' />
            </DockIcon>
            <DockIcon>
                <Mail className='h-6 w-6' />
            </DockIcon>
            <DockIcon>
                <TwitchIcon className='h-6 w-6' />
            </DockIcon>
            <DockIcon>
                <ResumeIcon className='h-6 w-6' />
            </DockIcon>
        </Dock>
    )
}
