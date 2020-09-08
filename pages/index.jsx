import Link from 'next/link';

const index = () => {
  return (
    <div className='container center'>
      <br /><br />
      <Link href='/blogs'>
        <a className='btn red pulse'>
          Explore Blogs
        </a>
      </Link>
      <br /><br />
      <hr />
      <div>
        <p className="flow-text">Next.js Static Site Generation</p>
        <p className="flow-text">
          Next.js | SSG | React Syntax Highlighter | Materialize
            </p>
      </div>
      <div className="center">
        <a href="https://github.com/inblack67/Next.js-Blogs" rel='noopener noreferrer' target='_blank'>
          <i className="fab fa-github fa-3x red-text"></i>
        </a>
      </div>
    </div>
  )
}

export default index
