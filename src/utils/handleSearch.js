export const handleSearch = (event, setInputValue, setFilteredDecks, userDecks) => {
    const searchText = event;
    setInputValue(searchText);

    // Use the filter method to create a new array of decks that match the search text
    const filtered = userDecks.filter((deck) =>
        deck.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );

    // Update the state with the filtered decks
    setFilteredDecks(filtered);
};