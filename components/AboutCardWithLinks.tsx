import { EmailIcon } from '@/components/icons/EmailIcon';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { TelegramIcon } from '@/components/icons/TelegramIcon';
import { AboutCard } from './AboutCard';

export const AboutCardWithLinks = ({ children = null }) => (
  <AboutCard>
    <div>
      <a
        href="mailto:hi@isuvorov.com"
        target="_blank"
        className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
      >
        <EmailIcon className="w-4 h-4 mr-2" />
        Send me Email
      </a>
      <a
        href="https://t.me/isuvorov"
        target="_blank"
        className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
      >
        {/* <TwitterIcon className="w-4 h-4 mr-2" /> */}
        <TelegramIcon className="w-4 h-4 mr-2" />
        Write me in Telegram
      </a>
      <a
        href="https://github.com/isuvorov"
        target="_blank"
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
      >
        <GithubIcon className="w-4 h-4 mr-2" />
        GitHub profile
      </a>
    </div>
  </AboutCard>
);
