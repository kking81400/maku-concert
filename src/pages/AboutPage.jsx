import React from 'react';

// A small reusable component for skill cards
// کامپوننت کوچکی برای نمایش کارت‌های مهارت
const SkillCard = ({ icon, name, category }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center">
        <i className={`${icon} text-5xl text-indigo-500 mb-4`}></i>
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 mt-1 text-sm">{category}</p>
    </div>
);


export default function AboutPage() {
    const profileImageUrl = 'https://placehold.co/150x150/6366F1/E0E7FF?text=Ali';

    const skills = [
        { name: 'React & Next.js', icon: 'fa-brands fa-react', category: 'Front-End' },
        { name: 'Node.js & Express', icon: 'fa-brands fa-node-js', category: 'Back-End' },
        { name: 'React Native', icon: 'fa-brands fa-react', category: 'Mobile' },
        { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', category: 'Styling' },
        { name: 'Git & GitHub', icon: 'fa-brands fa-git-alt', category: 'Version Control' },
        { name: 'Docker', icon: 'fa-brands fa-docker', category: 'DevOps' },
    ];

    return (
        <div className="bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 py-16">

                {/* --- Hero Section --- */}
                <section className="text-center fade-in">
                    <img
                        src={profileImageUrl}
                        alt="تصویر پروفایل علی اسدزاده"
                        className="w-40 h-40 rounded-full object-cover border-4 border-indigo-300 shadow-xl mx-auto"
                    />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-6">
                        علی اسدزاده
                    </h1>
                    <p className="text-lg text-indigo-600 font-semibold mt-2">
                        توسعه‌دهنده وب و اپلیکیشن
                    </p>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        توسعه‌دهنده‌ای اهل ماکو، مشتاق به ساخت راه‌حل‌های دیجیتال کارآمد، خلاقانه و معنادار با استفاده از فناوری.
                    </p>
                </section>

                {/* --- About Me & Mission Section --- */}
                <section className="mt-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div className="bg-white p-8 rounded-2xl shadow-lg fade-in">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-r-4 border-indigo-500 pr-4">داستان من</h2>
                        <p className="text-gray-700 leading-loose text-justify">
                            سفر من در دنیای برنامه‌نویسی از کنجکاوی برای حل چالش‌ها با استفاده از فناوری آغاز شد. امروز، به عنوان یک متخصص در اکوسیستم قدرتمند جاوااسکریپت، نگاهم به کدنویسی فراتر از یک شغل است؛ این ابزار من برای خلق ارزش و ایجاد تغییر مثبت است.
                        </p>
                    </div>
                    <div className="bg-indigo-600 text-white p-8 rounded-2xl shadow-lg fade-in">
                        <h2 className="text-2xl font-bold mb-3 border-r-4 border-white pr-4">چرا این پروژه؟</h2>
                        <p className="leading-loose text-justify opacity-90">
                            این پلتفرم، دیدگاه من برای مدرن‌سازی و تسهیل دسترسی به رویدادهای فرهنگی در منطقه آزاد ماکو است. معتقدم فناوری می‌تواند پلی قدرتمند میان هنرمندان و مردم ایجاد کرده و تجربه‌ای لذت‌بخش برای همه خلق کند.
                        </p>
                    </div>
                </section>


                {/* --- Skills Section --- */}
                <section className="mt-24 text-center fade-in">
                    <h2 className="text-3xl font-bold text-gray-800">جعبه ابزار حرفه‌ای من</h2>
                    <p className="text-gray-600 mt-2 mb-12">مجموعه‌ای از فناوری‌های مدرن برای تبدیل ایده‌ها به محصولات دیجیتال.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        {skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
                    </div>
                </section>

                {/* --- Contact Section --- */}
                <section className="mt-24 max-w-3xl mx-auto text-center bg-white p-10 rounded-2xl shadow-xl fade-in">
                    <h2 className="text-3xl font-bold text-gray-800">بیایید صحبت کنیم!</h2>
                    <p className="text-gray-600 mt-3 mb-8">
                        از بررسی این پروژه سپاسگزارم و برای گفتگو در مورد فرصت‌های همکاری و پروژه‌های جدید هیجان‌زده‌ام.
                    </p>
                    <div className="flex justify-center items-center gap-6">
                        <a href="mailto:aliasadzade13811004@gmail.com" className="bg-indigo-100 text-indigo-700 h-16 w-16 rounded-full flex items-center justify-center text-2xl hover:bg-indigo-200 transition-all duration-300">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://github.com/kking81400" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl hover:bg-gray-900 transition-all duration-300">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};
