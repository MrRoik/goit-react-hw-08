import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.contactBox}>
        <p>Suggestions? Send to email address:</p>
        <a href="mailto:roiik.mixa@gmail.com" className={css.footerLink}>
          roiik.mixa@gmail.com
        </a>
      </div>
      <p>2024</p>
    </div>
  );
};

export default Footer;
