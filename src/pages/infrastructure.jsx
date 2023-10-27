import InnerBanner from '@/component/InnerBanner';
import KeyHighlight from '@/component/KeyhighlightSec';
import OperationSec from '@/component/OperationSec';
import VideoSec from '@/component/VideoSec';
import SectionTitle from '@/component/layouts/SectionTitle';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


const InfraStructure = () => {
    return (
        <>
            <InnerBanner/>
            <SectionTitle/>
            <VideoSec/>
            <OperationSec/>
            <KeyHighlight/>
        </>
    )
}

export default InfraStructure;