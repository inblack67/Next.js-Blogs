

const Footer = () => {
    return (
        <footer className="page-footer black" id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Next.js <span className="red-text">Blogs</span></h5>
                        <p className="grey-text text-lighten-4">Markdown Blogs Statically Generated In Next.js</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright red">
                <div className="container">
                    © 2020 Next.js Blogs
            <a className="grey-text text-lighten-4 right" href="https://inblack67.vercel.app" target='_blank' rel='noopener noreferrer'>inblack67</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
