import CameraScroll from '@/components/CameraScroll';
import Features from '@/components/Features';
import Modules from '@/components/Modules';
import Specs from '@/components/Specs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <CameraScroll />
      
      <div className="relative z-10 bg-[#050505]">
        <Features />
        <Modules />
        <Specs />
        <Footer />
      </div>
    </main>
  );
}
