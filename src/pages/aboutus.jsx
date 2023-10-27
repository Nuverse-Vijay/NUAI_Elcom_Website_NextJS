import InnerBanner from '@/component/InnerBanner';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import MissionVision from '@/component/MissionVission';
import Purpose from '@/component/PurposeSec';
import IntroductionSec from '@/component/IntroductionSec';
import Advantages from '@/component/AdvantagesSec';
import ExploreSec from '@/component/ExploreSec';
import CounterSec from '@/component/CounterSec';
import TeamSec from '@/component/TeamSec';
import GloblemapSec from '@/component/GloblemapSec';





const Aboutus = () => {
    return (
        <>
        <InnerBanner/>
        <IntroductionSec/>
        <CounterSec/>
        <MissionVision/>
        <Purpose/>
        <Advantages/>
        <GloblemapSec/>
        <ExploreSec/>
        <TeamSec/>
        </>
    )
}

export default Aboutus;