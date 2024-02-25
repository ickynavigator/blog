import { Metadata, ResolvingMetadata } from 'next';
import { getClient } from '~/lib/sanity/client';
import { urlForImage } from '~/lib/sanity/image';
import { SanityValues } from '../../../../../sanity.config';
import { loadQuery } from '~/lib/sanity/store';
import { PAGE_FRAGMENT } from '~/app/(root)/post/[slug]/_components/query';
import PostPreview from '~/app/(root)/post/[slug]/_components/preview';
import Post from '~/app/(root)/post/[slug]/_components/post';
import { draftMode } from 'next/headers';

type Props = { params: { slug: string } };

const client = getClient();

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  const META_FRAGMENT = /* groq */ `*[_type == "post" && slug.current == $slug][0]`;
  const post = (await client.fetch(META_FRAGMENT, {
    slug,
  })) as SanityValues['post'];

  if (!post) {
    return {
      title: 'Not Found',
      description:
        "Looks like that post either doesn't exist or it has been taken down",
    };
  }

  const img = urlForImage(post.mainImage)?.url();
  const ogImages = (await parent).openGraph?.images || [];
  const twitterImages = (await parent).twitter?.images || [];

  if (img) {
    const metaImg = {
      url: img,
      width: 800,
      height: 600,
      alt: post.title,
    };

    ogImages.unshift(metaImg);
    twitterImages.unshift({ url: img, alt: post.title });
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/post/${post.slug.current}`,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@obifortunebleh',
      creatorId: '1467726470533754880',
      site: `/post/${post.slug.current}`,
      images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
  };
}

export async function generateStaticParams() {
  const _POSTS_FRAGMENT = /* groq */ `*[_type=="post"]{ "slug": slug.current }`;
  const slugs = (await client.fetch(_POSTS_FRAGMENT)) as { slug: string }[];

  return slugs.map(({ slug }) => ({ params: { slug } }));
}

async function Page(props: Props) {
  const { slug } = props.params;
  const post = await loadQuery<SanityValues['post']>(
    PAGE_FRAGMENT,
    { slug },
    { perspective: draftMode().isEnabled ? 'previewDrafts' : 'published' },
  );

  return draftMode().isEnabled ? (
    <PostPreview initial={post} slug={slug} />
  ) : (
    <Post post={post.data} />
  );
}

export default Page;
