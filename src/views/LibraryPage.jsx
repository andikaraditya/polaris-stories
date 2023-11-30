import "./LibraryPage.css"
import Books from "../components/Books";
import { useState } from "react";


function LibraryPage() {

    const [books, setBooks] = useState(["","","","","","","","","","","","","","","",""])
    return (
        <>
            <div id="library">
                <h1>Bookshelf</h1>
                <div id="shelf">
                    {books.map((el, index) => {
                        return (
                            <Books 
                            key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default LibraryPage;