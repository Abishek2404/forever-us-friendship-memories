/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import PeopleSection from './components/PeopleSection';
import MemoryWall from './components/MemoryWall';
import Timeline from './components/Timeline';
import YearbookSection from './components/YearbookSection';
import FinalMemory from './components/FinalMemory';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-primary min-h-screen text-secondary font-body selection:bg-accent-gold/30 selection:text-secondary">
      <Hero />
      <PeopleSection />
      <MemoryWall />
      <Timeline />
      <YearbookSection />
      <FinalMemory />
    </main>
  );
}
