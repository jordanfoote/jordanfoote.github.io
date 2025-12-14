export default function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>Feel free to reach out for collaboration or freelance work!</p>

            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <div className="socials">
                <p>Connect with me:</p>
                <a href="https://github.com/jordanfoote" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/jordanfoote" target="_blank">LinkedIn</a>
            </div>
        </div>

    );
}
