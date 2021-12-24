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
import { books } from "../components/books"





const IndexPage = () => {
    const years = [2021, 2020]
    const booksByYear = years.map(year => (books.filter(function(book) {
        return new Date(book.date_read).getFullYear() === year;
    })))
    return (
        <Layout>
            <h1 style={{ fontSize: '8vw', color: 'rgb(118, 0, 0)', fontVariationSettings: '"DSPL" 420', marginBottom: '0' }}>bookshelf</h1>
            <div style={{
                paddingLeft: '0.5rem',
                paddingBottom: '1.5rem'
            }} >
                <Link to="/">
                    <span
                        style={{
                            paddingRight: '10px',
                            fontWeight: `400`,
                        }}
                    >
                        home
                    </span>
                </Link>
                <Link to="/blog">
                    <span
                        style={{
                            paddingRight: '10px',
                            fontWeight: `400`,
                        }}
                    >
                        blog
                    </span>
                </Link>
                <Link to="/bookshelf">
                    <span
                        style={{
                            paddingRight: '10px',
                            fontWeight: `400`,
                        }}
                    >
                        bookshelf
                    </span>
                </Link>
            </div>

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
