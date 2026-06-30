const Hobbies = ({ hobbies }) => {
    return (
        <>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                Interests
            </h2>
            <p className="text-xs">{hobbies.join(" · ")}</p>
        </>
    );
}

export default Hobbies;
