import React from "react"
import { Link } from "gatsby"
import useVariableFont from "react-variable-fonts"
import ReactCursorPosition, {
    INTERACTIONS,
} from "@appinfini/react-cursor-position"
import Pointable from "react-pointable"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useMousePosition from "../components/useMousePosition"


const books = [{ "title": "Exhalation", "isbn": "9781101972083", "author_name": "Ted Chiang", "my_rating": "4", "date_read": "12/8/21", "bookshelves": "read" }, { "title": "A Thousand Brains: A New Theory of Intelligence", "isbn": "9781541675810", "author_name": "Jeff Hawkins", "my_rating": "5", "date_read": "12/4/21", "bookshelves": "read" }, { "title": "The Metamorphosis of Prime Intellect", "isbn": "9781411602199", "author_name": "Roger    Williams", "my_rating": "5", "date_read": "10/23/21", "bookshelves": "read" }, { "title": "Snow Crash", "isbn": "9780553088533", "author_name": "Neal Stephenson", "my_rating": "4", "date_read": "10/21/21", "bookshelves": "read" }, { "title": "TRANSHUMANISM INC.", "isbn": "569913736X", "author_name": "Victor Pelevin", "my_rating": "4", "date_read": "9/12/21", "bookshelves": "read" }, { "title": "Anathem", "isbn": "9780061474095", "author_name": "Neal Stephenson", "my_rating": "3", "date_read": "9/8/21", "bookshelves": "read" }, { "title": "Peak: Secrets from the New Science of Expertise", "isbn": "9780544947221", "author_name": "K. Anders Ericsson", "my_rating": "4", "date_read": "8/3/21", "bookshelves": "read" }, { "title": "The Annotated Turing: A Guided Tour Through Alan Turing's Historic Paper on Computability and the Turing Machine", "isbn": "9780470229057", "author_name": "Charles Petzold", "my_rating": "3", "date_read": "7/27/21", "bookshelves": "read" }, { "title": "Beyond Order: 12 More Rules For Life", "isbn": "9780593084649", "author_name": "Jordan B. Peterson", "my_rating": "4", "date_read": "7/19/21", "bookshelves": "read" }, { "title": "The Beginning of Infinity: Explanations That Transform the World", "isbn": "9780140278163", "author_name": "David Deutsch", "my_rating": "5", "date_read": "5/31/21", "bookshelves": "read" }, { "title": "Singularity Sky (Eschaton, #1)", "isbn": "9781841493343", "author_name": "Charles Stross", "my_rating": "4", "date_read": "5/19/21", "bookshelves": "read" }, { "title": "Love of Life (Single Story)", "isbn": "", "author_name": "Jack London", "my_rating": "5", "bookshelves": "read" }, { "title": "The Glass Bead Game", "isbn": "9780312278496", "author_name": "Hermann Hesse", "my_rating": "3", "date_read": "4/25/21", "bookshelves": "read" }, { "title": "The Hacker Ethic: and the Spirit of the Information Age", "isbn": "9780375505669", "author_name": "Pekka Himanen", "my_rating": "3", "date_read": "2/28/21", "bookshelves": "read" }, { "title": "The Listening Society: A Metamodern Guide to Politics, Book One (Metamodern Guides 1)", "isbn": "9788799973903", "author_name": "Hanzi Freinacht", "my_rating": "5", "date_read": "2/18/21", "bookshelves": "read" }, { "title": "Piranesi", "isbn": "9781635575637", "author_name": "Susanna Clarke", "my_rating": "3", "date_read": "2/17/21", "bookshelves": "read" }, { "title": "The Story of the Mongols Whom We Call the Tartars", "isbn": "9780828320177", "author_name": "Giovanni da Pian del Carpine", "my_rating": "3", "date_read": "2/4/21", "bookshelves": "read" }, { "title": "Cryptonomicon", "isbn": "0060512806", "author_name": "Neal Stephenson", "my_rating": "3", "date_read": "1/28/21", "bookshelves": "read" }, { "title": "Ralph Waldo Emerson on Self Reliance", "isbn": "9781425468910", "author_name": "Ralph Waldo Emerson", "my_rating": "5", "date_read": "12/8/20", "bookshelves": "read" }, { "title": "The Good Gut: Taking Control of Your Weight, Your Mood, and Your Long-term Health", "isbn": "9781594206283", "author_name": "Justin Sonnenburg", "my_rating": "3", "date_read": "11/29/20", "bookshelves": "read" }, { "title": "Continuity of Parks", "isbn": "9789870405672", "author_name": "Julio CortÃ¡zar", "my_rating": "4", "date_read": "11/22/20", "bookshelves": "read" }, { "title": "Permutation City (Subjective Cosmology #2)", "isbn": "9780061054815", "author_name": "Greg Egan", "my_rating": "3", "date_read": "11/18/20", "bookshelves": "read" }, { "title": "Already Free: Buddhism Meets Psychotherapy on the Path of Liberation", "isbn": "9781604074741", "author_name": "Bruce Tift", "my_rating": "5", "date_read": "8/16/20", "bookshelves": "read" }, { "title": "Gnomon", "isbn": "9780525432937", "author_name": "Nick Harkaway", "my_rating": "5", "date_read": "7/11/20", "bookshelves": "read" }, { "title": "AI Superpowers: China, Silicon Valley, and the New World Order", "isbn": "9781328546395", "author_name": "Kai-Fu Lee", "my_rating": "4", "date_read": "6/27/20", "bookshelves": "read" }, { "title": "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch", "isbn": "0894808532", "author_name": "Terry Pratchett", "my_rating": "4", "date_read": "6/20/20", "bookshelves": "read" }, { "title": "Hackers & Painters: Big Ideas from the Computer Age", "isbn": "9780596006624", "author_name": "Paul    Graham", "my_rating": "4", "date_read": "6/16/20", "bookshelves": "read" }, { "title": "Chaos: Making a New Science", "isbn": "9780140092509", "author_name": "James Gleick", "my_rating": "5", "bookshelves": "read" }, { "title": "Modern Romance", "isbn": "9781594206276", "author_name": "Aziz Ansari", "my_rating": "2", "date_read": "6/15/20", "bookshelves": "read" }, { "title": "The Fifth Science", "isbn": "9781796356304", "author_name": "Exurb1a", "my_rating": "5", "date_read": "6/4/20", "bookshelves": "read" }, { "title": "Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime", "isbn": "9781524743017", "author_name": "Sean Carroll", "my_rating": "4", "date_read": "3/29/20", "bookshelves": "read" }, { "title": "Siddhartha", "isbn": "0141181230", "author_name": "Hermann Hesse", "my_rating": "5", "date_read": "5/31/20", "bookshelves": "read" }, { "title": "Catching the Big Fish: Meditation, Consciousness, and Creativity", "isbn": "9781585425402", "author_name": "David Lynch", "my_rating": "4", "date_read": "5/31/20", "bookshelves": "read" }, { "title": "Generative Design: Visualize, Program, and Create with JavaScript in p5.js", "isbn": "9781616897581", "author_name": "Benedikt Groa", "my_rating": "3", "date_read": "5/19/20", "bookshelves": "read" }, { "title": "Blindsight (Firefall, #1)", "isbn": "9780765312181", "author_name": "Peter Watts", "my_rating": "3", "bookshelves": "read" }, { "title": "No Boundary: Eastern and Western Approaches to Personal Growth", "isbn": "9781570627439", "author_name": "Ken Wilber", "my_rating": "5", "date_read": "5/17/20", "bookshelves": "read" }, { "title": "Why Zebras Don't Get Ulcers", "isbn": "9780805073690", "author_name": "Robert M. Sapolsky", "my_rating": "3", "date_read": "5/14/20", "bookshelves": "read" }, { "title": "The Simpsons and Their Mathematical Secrets", "isbn": "9781620402771", "author_name": "Simon Singh", "my_rating": "3", "date_read": "5/13/20", "bookshelves": "read" }, { "title": "Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values (Phaedrus, #1)", "isbn": "9780060589462", "author_name": "Robert M. Pirsig", "my_rating": "3", "bookshelves": "read" }, { "title": "Fiasco", "isbn": "9780156306300", "author_name": "Stanislaw Lem", "my_rating": "4", "date_read": "5/11/20", "bookshelves": "read" }, { "title": "The Master and Margarita", "isbn": "9780679760801", "author_name": "Mikhail Bulgakov", "my_rating": "5", "bookshelves": "read" }, { "title": "The Yellow Arrow", "isbn": "9780811213554", "author_name": "Victor Pelevin", "my_rating": "5", "date_read": "5/2/20", "bookshelves": "read" }, { "title": "The World of Tiers, Volume 1 (World of Tiers Omnibus 1-3)", "isbn": "9780312857615", "author_name": "Philip JosÃ© Farmer", "my_rating": "4", "bookshelves": "read" }, { "title": "Summa technologiae", "isbn": "9783518371787", "author_name": "Stanislaw Lem", "my_rating": "5", "date_read": "4/3/20", "bookshelves": "read" }, { "title": "Complete Works of Jack London", "isbn": "", "author_name": "Jack London", "my_rating": "5", "bookshelves": "read" }, { "title": "Dune (Dune, #1)", "isbn": "9780593099322", "author_name": "Frank Herbert", "my_rating": "0", "date_read": "2/18/20", "bookshelves": "read" }, { "title": "The Black Swan: The Impact of the Highly Improbable", "isbn": "", "author_name": "Nassim Nicholas Taleb", "my_rating": "4", "bookshelves": "read" }, { "title": "Jonathan Livingston Seagull", "isbn": "9780743278904", "author_name": "Richard Bach", "my_rating": "5", "bookshelves": "read" }, { "title": "The Little Prince", "isbn": "", "author_name": "Antoine de Saint-ExupÃ©ry", "my_rating": "5", "bookshelves": "read" }, { "title": "Referent", "isbn": "", "author_name": "Ray Bradbury", "my_rating": "5", "bookshelves": "read" }, { "title": "The Machine Stops", "isbn": "9781409903291", "author_name": "E.M. Forster", "my_rating": "4", "bookshelves": "read" }, { "title": "Fahrenheit 451", "isbn": "", "author_name": "Ray Bradbury", "my_rating": "3", "bookshelves": "read" }, { "title": "The World of Tiers Volume 2 (World of Tiers Omnibus 4-5,7)", "isbn": "9780312863760", "author_name": "Philip JosÃ© Farmer", "my_rating": "0", "bookshelves": "read" }, { "title": "The World of Tiers, Volume 2 (World of Tiers Omnibus 3-5)", "isbn": "9780312863777", "author_name": "Philip JosÃ© Farmer", "my_rating": "0", "bookshelves": "read" }, { "title": "The Selfish Gene", "isbn": "9780199291151", "author_name": "Richard Dawkins", "my_rating": "5", "bookshelves": "read" }, { "title": "Rework", "isbn": "9780307463746", "author_name": "Jason Fried", "my_rating": "4", "bookshelves": "read" }, { "title": "Zero to One: Notes on Startups, or How to Build the Future", "isbn": "9780804139298", "author_name": "Peter Thiel", "my_rating": "4", "bookshelves": "read" }, { "title": "How to Win Friends and Influence People", "isbn": "", "author_name": "Dale Carnegie", "my_rating": "2", "bookshelves": "read" }, { "title": "Purple Cow: Transform Your Business by Being Remarkable", "isbn": "9781591840213", "author_name": "Seth Godin", "my_rating": "3", "bookshelves": "read" }, { "title": "Delivering Happiness: A Path to Profits, Passion, and Purpose", "isbn": "9780446563048", "author_name": "Tony Hsieh", "my_rating": "4", "bookshelves": "read" }, { "title": "Good to Great: Why Some Companies Make the Leap... and Others Don't", "isbn": "9780066620992", "author_name": "James C. Collins", "my_rating": "5", "bookshelves": "read" }, { "title": "Deep Work: Rules for Focused Success in a Distracted World", "isbn": "9781455586691", "author_name": "Cal Newport", "my_rating": "3", "bookshelves": "read" }, { "title": "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)", "isbn": "", "author_name": "J.K. Rowling", "my_rating": "5", "bookshelves": "read" }, { "title": "Martin Eden", "isbn": "", "author_name": "Jack London", "my_rating": "5", "bookshelves": "read" }, { "title": "The C Programming Language", "isbn": "9780131103627", "author_name": "Brian W. Kernighan", "my_rating": "0", "bookshelves": "read" }, { "title": "Sapiens: A Brief History of Humankind", "isbn": "", "author_name": "Yuval Noah Harari", "my_rating": "2", "bookshelves": "read" }, { "title": "Atlas Shrugged", "isbn": "9780452011878", "author_name": "Ayn Rand", "my_rating": "4", "bookshelves": "read" }, { "title": "Don't Eat the Marshmallow Yet!: The Secret to Sweet Success in Work and Life", "isbn": "9780425205457", "author_name": "Joachim de Posada", "my_rating": "3", "bookshelves": "read" }, { "title": "The Goal: A Process of Ongoing Improvement", "isbn": "9780884271789", "author_name": "Eliyahu M. Goldratt", "my_rating": "3", "bookshelves": "read" }, { "title": "Skin in the Game: The Hidden Asymmetries in Daily Life", "isbn": "9780241300657", "author_name": "Nassim Nicholas Taleb", "my_rating": "3", "bookshelves": "read" }, { "title": "Antifragile: Things That Gain from Disorder", "isbn": "9781400067824", "author_name": "Nassim Nicholas Taleb", "my_rating": "4", "bookshelves": "read" }, { "title": "Permanent Record", "isbn": "9781250237231", "author_name": "Edward Snowden", "my_rating": "0", "bookshelves": "read" }, { "title": "iPhuck 10", "isbn": "9785040893942", "author_name": "Victor Pelevin", "my_rating": "0", "bookshelves": "read" }, { "title": "Might is Right", "isbn": "9780967812311", "author_name": "Ragnar Redbeard", "my_rating": "4", "bookshelves": "read" }, { "title": "Slaughterhouse-Five", "isbn": "9780385333849", "author_name": "Kurt Vonnegut Jr.", "my_rating": "4", "bookshelves": "read" }, { "title": "Letters from a Stoic", "isbn": "9780140442106", "author_name": "Seneca", "my_rating": "5", "bookshelves": "read" }, { "title": "Have Space Suite will Travel", "isbn": "9781416505495", "author_name": "Robert A. Heinlein", "my_rating": "5", "bookshelves": "read" }, { "title": "Glory Road", "isbn": "9780765312228", "author_name": "Robert A. Heinlein", "my_rating": "4", "bookshelves": "read" }, { "title": "Burning Daylight", "isbn": "9781600961243", "author_name": "Jack London", "my_rating": "5", "bookshelves": "read" }, { "title": "The Financier (Trilogy of Desire, #1)", "isbn": "", "author_name": "Theodore Dreiser", "my_rating": "5", "bookshelves": "read" }, { "title": "Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character", "isbn": "9780393316049", "author_name": "Richard P. Feynman", "my_rating": "4", "bookshelves": "read" }]



const PositionLabel = props => {
    const {
        detectedEnvironment: {
            isMouseDetected = false,
            isTouchDetected = false,
        } = {},
        elementDimensions: { width = 0, height = 0 } = {},
        isActive = false,
        isPositionOutside = false,
        position: { x = 0, y = 0 } = {},
    } = props

    return (
        <div className="example__label">
            <h1
                style={{
                    color: `#760000`,
                    fontSize: `15vh`,
                    fontWeight: `400`,
                    fontVariationSettings: `"DSPL" ${y}`,
                }}
            >
                bookshelf{" "}
            </h1>
        </div>
    )
}

const IndexPage = () => {
    const years = [2021, 2020]
    const booksByYear = years.map(year => (books.filter(function(book) {
        return new Date(book.date_read).getFullYear() === year;
    })))
    return (
        <Layout>
            <h1 style={{ fontSize: '10vh', color: 'rgb(118, 0, 0)' }}>bookshelf</h1>
            <div style={{ paddingLeft: `0.5rem` }}>
                <p>
                    Here are some of the books I have read lately.
                    <br />
                    The list is also mirrored at{" "}
                    <Link target="_blank" to="https://goodreads.com/3005
">
                        goodreads.com/3005
                    </Link>
                </p>
                <p style={{ fontSize: '2em' }}>2021</p>
                {booksByYear[0].map((book, i) => (
                    <div class="book">
                        <span class="book_cover_container" key={i}>

                            <img class="book_cover" alt={book.title} src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} />
                        </span>
                        <div class="book_description">
                            <h4 key={i}>
                                {book.my_rating === "5" ? (<span alt="Great book!" class="bookshelf_featured_mark"><big> † </big></span>) : null}
                                {book.title}
                                <br />
                                <i class="text-light text-muted"><small>{book.author_name}</small></i>
                                <br />
                            </h4>
                        </div>
                    </div>
                ))}
                <p style={{ fontSize: '2em' }}>2020</p>
                {booksByYear[1].map((book, i) => (
                    <div class="book">
                        <span class="book_cover_container" key={i}>
                            <img class="book_cover" alt={book.title} src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} />
                        </span>
                        <div class="book_description">
                            <h4 key={i}>
                                {book.my_rating === "5" ? <span alt="Great book!" class="bookshelf_featured_mark"><big> † </big></span> : null}
                                {book.title}
                                <br />
                                <i class="text-light text-muted"><small>{book.author_name}</small></i>
                            </h4>
                        </div>
                    </div>
                ))}
                <Link target="_blank" to="https://www.instagram.com/iska/">
                    instagram.com/iska
                </Link>{" "}
                < br />
                <Link target="_blank" to="https://www.are.na/iska">
                    are.na/iska
                </Link>{" "}
                < br />
                <Link target="_blank" to="https://www.goodreads.com/3005 ">
                    goodreads.com/3005
                </Link>
                <br />
                <Link target="_blank" to="https://t.me/iskander3005">
                    t.me/iskander3005
                </Link>
                <br />
                <Link target="_blank" to="https://sptfy.com/iska">
                    sptfy.com/iska
                </Link>
            </div>
        </Layout >
    )
}

export default IndexPage
