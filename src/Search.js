import React from "react";
import './App.css';


export default function Search() {
    return (
        <form class="search-from mb-3">
            <div class="row">
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        id="search"
                        placeholder="Enter a city"
                    />
                </div>
                <div class="col-2">
                    <input
                        type="submit"
                        class="btn btn-primary"
                        id="search"
                        value="Search"
                    />
                </div>
            </div>
        </form>
    )
}