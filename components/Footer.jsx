
const Footer = () => {

  const date = new Date();
    const year = date.getFullYear();
    return (
      <footer className="footer">
        <p> &copy; {year} All rights reserved.</p>
      </footer>
    );
}

export default Footer