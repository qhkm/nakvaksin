import { IoLogoGithub } from 'react-icons/io5';

export default function Footer() {
    return (
        <footer className="mt-8 text-center py-6 border-t border-gray-200 text-xs text-gray-700 w-full">
            <div>NakVaksin | An initiative by Malaysians for everyone</div>
            <div>
                Made by{' '}
                <a href="https://twitter.com/cwcheak" rel="external noreferrer" target="_blank">
                    Julius Chan
                </a>
                ,{' '}
                <a href="https://www.chengkangzai.com/" rel="external noreferrer" target="_blank">
                    Ching Cheng Kang
                </a>
                ,{' '}
                <a href="https://twitter.com/NubPro" rel="external noreferrer" target="_blank">
                    Chai Woon Khai
                </a>
            </div>
            <div className="mt-2">
                <a href="mailto:nakvaksin@gmail.com" rel="author">
                    Need help? Email us
                </a>
            </div>
            <div className="mt-1">
                <a href="https://github.com/nubpro/nakvaksin">
                    <IoLogoGithub size={20} className="inline-block" />
                </a>
            </div>
        </footer>
    );
}
