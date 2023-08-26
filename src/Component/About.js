import React from "react";

function About(props) {

    const aboutDarkStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : '#142F32',
        border: '1px solid',
        borderColor: props.mode === 'light' ? '#0e1314a6' : 'white'
    }


    return (
        <div className="container" style={{
            color: props.mode === 'light' ? 'black' : 'white',
            backgroundColor: props.mode === 'light' ? 'white' : '#142F32'
        }}>


            <div className="accordion m-5 px-md-5" id="accordionPanelsStayOpenExample" style={{
                color: props.mode === 'light' ? 'black' : 'white',
                backgroundColor: props.mode === 'light' ? 'white' : '#142F32'
            }}>

                <h1 className="h1 my-3">About US</h1>

                <div className="accordion-item " style={aboutDarkStyle}>
                    <h2 className="accordion-header " >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{color: '#061F2B', backgroundColor: '#76F9EB'}}>
                            <strong>Enhance Text Manipulation</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            The "TextUtils" tool provides a user-friendly interface to easily manipulate text according to your needs. Convert text between uppercase and lowercase with just a click, enabling you to adjust text formatting for various contexts, such as writing emails, programming, or social media posts.
                        </div>
                    </div>
                </div>

                <div className="accordion-item " style={aboutDarkStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"style={{color: '#061F2B', backgroundColor: '#76F9EB'}}>
                            <strong>Effortless Content Management</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            Clearing the entire textarea content becomes hassle-free with the "Clear Text" feature. Whether you're drafting a new document or preparing a fresh piece of code, this feature lets you swiftly remove all the existing text, saving you time and effort.
                        </div>
                    </div>
                </div>

                <div className="accordion-item " style={aboutDarkStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"style={{color: '#061F2B', backgroundColor: '#76F9EB'}}>
                            <strong>Precise Copying of Text</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            The "Copy Selected Text" function ensures precise copying of only the text you've highlighted in the textarea. Whether you're gathering information from a lengthy document or sharing specific quotes, this feature streamlines the copying process, avoiding accidental copying of unnecessary content.
                        </div>
                    </div>
                </div>

                <div className="accordion-item " style={aboutDarkStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour"style={{color: '#061F2B', backgroundColor: '#76F9EB'}}>
                            <strong>Streamline Text Cleaning</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            Tidy up your text by removing extra spaces using the "Remove Extra Space" feature. This tool intelligently trims excessive spaces, tabs, and line breaks, ensuring your content looks clean and professional. It's particularly useful when copying text from different sources or cleaning up code.
                        </div>
                    </div>
                </div>

                <div className="accordion-item " style={aboutDarkStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive"style={{color: '#061F2B', backgroundColor: '#76F9EB'}}>
                            <strong>Customizable Modes</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            Experience the TextUtils tool in your preferred visual environment with the "Light" and "Dark" modes. Tailor the interface to match your workspace's ambiance, enhancing readability and reducing eye strain. Additionally, the tool offers a unique "Yellow" theme, allowing you to experiment with different color schemes.
                        </div>
                    </div>
                </div>

                <div className="accordion-item " style={aboutDarkStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix"style={{color: '#061F2B', backgroundColor: '#76F9EB'}}>
                            <strong>User-Focused Design</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            TextUtils is designed with user convenience in mind. The intuitive interface and well-organized features empower users of all backgrounds to efficiently manipulate and manage their text content. Whether you're a writer, programmer, or student, TextUtils adapts to your needs.
                        </div>
                    </div>
                </div>

                <div className="accordion-item " style={aboutDarkStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven"style={{color: '#061F2B', backgroundColor: '#76F9EB'}}>
                            <strong>Responsive and Accessible</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            Access the TextUtils tool seamlessly on various devices, from desktops to smartphones, thanks to its responsive design. Additionally, the tool prioritizes accessibility, ensuring that users with different abilities can effectively use its features.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default About;