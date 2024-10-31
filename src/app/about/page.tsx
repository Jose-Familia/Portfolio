'use client';

import Image from 'next/image';
import NavBar from '@/components/ui/navbar';
import Footer from '@/components/footer';
import BlurFade from '@/components/magicui/blur-fade';
import Head from 'next/head';
import { useState, lazy, Suspense } from 'react';
import React, { ReactNode, MouseEventHandler } from 'react';

interface TabButtonProps {
    children: ReactNode;
    isActive: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const TabButton: React.FC<TabButtonProps> = ({ children, isActive, onClick }) => (
    <button
        className={`px-4 py-2 font-medium rounded-md transition-colors ${
            isActive
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'text-muted-foreground hover:text-foreground'
        }`}
        onClick={onClick}
    >
        {children}
    </button>
);

const AboutContent = lazy(() => import('@/components/content/aboutContent'));
const ExperienceContent = lazy(() => import('@/components/content/experienceContent'));
const PersonalContent = lazy(() => import('@/components/content/personalContent'));

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <>
            <Head>
                <title>About Jose Rene Familia</title>
                <meta
                    name="description"
                    content="Learn more about Jose Rene Familia, a passionate web developer and frontend rookie."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="About Jose Rene Familia" />
                <meta
                    property="og:description"
                    content="Learn more about Jose Rene Familia, a passionate web developer and frontend rookie."
                />
                <meta property="og:image" content="https://portfolio-josefamilia.vercel.app/images/profile.jpg" />
                <meta property="og:url" content="https://portfolio-josefamilia.vercel.app" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="keywords" content="Jose Rene Familia, web developer, frontend developer, portfolio" />
                <meta name="author" content="Jose Rene Familia" />
            </Head>
            <div className="min-h-screen flex flex-col bg-gradient-radial from-white via-blue-200 to-blue-500 dark:from-gray-800 dark:via-gray-900 dark:to-black">
                <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
                    <article className="max-w-2xl w-full mx-auto p-8 bg-white dark:bg-gray-950 rounded-lg shadow-md">
                        <BlurFade delay={0.5}>
                            <Image
                                src="/images/profile.png"
                                alt="Jose Rene Familia"
                                width={200}
                                height={200}
                                className="mx-auto rounded-full mb-6"
                                priority
                            />
                            <header className="text-center mb-8">
                                <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Jose Rene Familia</h1>
                                <p className="text-xl mb-6 text-black dark:text-white">Web Development | Frontend</p>
                            </header>
                            <div className="flex justify-center space-x-4 mb-8">
                                <TabButton isActive={activeTab === 'about'} onClick={() => setActiveTab('about')}>
                                    About
                                </TabButton>
                                <TabButton isActive={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
                                    Experience
                                </TabButton>
                                <TabButton isActive={activeTab === 'personal'} onClick={() => setActiveTab('personal')}>
                                    Personal
                                </TabButton>
                            </div>
                            <div className="space-y-4 text-black dark:text-white">
                                <Suspense fallback={<div>Loading...</div>}>
                                    {activeTab === 'about' && <AboutContent />}
                                    {activeTab === 'experience' && <ExperienceContent />}
                                    {activeTab === 'personal' && <PersonalContent />}
                                </Suspense>
                            </div>
                        </BlurFade>
                    </article>
                </main>
                <NavBar />
                <Footer />
            </div>
        </>
    );
}
