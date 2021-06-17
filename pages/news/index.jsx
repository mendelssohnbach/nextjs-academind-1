import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NetJS IS A Great Framework</Link>
        </li>
        <li>Sometig Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
