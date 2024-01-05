'use client';
import { NextStudio } from 'next-sanity/studio';
import type { Config as ConfigNative } from 'sanity';
import config from '../../../../sanity.config';

export function Studio() {
  return <NextStudio config={config as ConfigNative} />;
}
