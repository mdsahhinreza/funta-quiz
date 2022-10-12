import React from 'react';
import { CopyBlock, solarizedDark } from 'react-code-blocks';
import './Blog.css';

const Blog = () => {
    const code2 = `<div ref={'myRef'} />`;
    const comment = '// `current` points to the mounted text input element';
    const code = `
    function TextInputWithFocusButton() {
        const inputEl = useRef(null);
        const onButtonClick = () => {
            ${comment}
            inputEl.current.focus();
        };
        return (
            <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
            </>
        );
        }
    `;
    return (
        <div className="blog">
            <div className='container bg-light rounded border mb-4'>
                <div className="p-4 text-start">
                    <h1 className='brandColor'>Blog-1: What is the purpose of react-router?</h1>
                    <p className='text-justify pt-2'>
                    <b>Routing</b> is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.<br></br><br></br>

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.<br></br><br></br>

                    React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                    </p>
                </div>
            </div>

            <div className='container bg-light rounded border mb-4'>
                <div className="p-4 text-start">
                    <h1 className='brandColor'>Blog-2: How does context API work?</h1>
                    <p className='text-justify pt-2'>
                    <h4>What is Context API?</h4>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.<br></br><br></br>

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                    <h4 className='pt-3'>How it works?</h4>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on <a href='https://reactjs.org/docs/context.html'>React's documentation page</a> 
                    </p>
                </div>
            </div>
            <div className='container bg-light rounded border mb-4'>
                <div className="p-4 text-start">
                    <h1 className='brandColor'>Blog-3: What you know about useRef?</h1>
                    <p className='text-justify pt-2'>
                    <b className='fs-4'>useRef</b> <br></br>
                    <div className="demo">
                        <br />
                        <CopyBlock
                        language="go"
                        text={`const refContainer = useRef(initialValue);`}
                        codeBlock
                        theme={solarizedDark}
                        showLineNumbers={false}
                        />
                    </div>
                    <code>useRef</code> returns a mutable ref object whose <code>.current</code> property is initialized to the passed argument (<code>initialValue</code>). The returned object will persist for the full lifetime of the component.<br></br><br></br>
                    <span className='mb-3'>A common use case is to access a child imperatively:</span>
                    <CopyBlock
                        language="go"
                        text={code}
                        codeBlock
                        theme={solarizedDark}
                        showLineNumbers={false}
                        />
                    </p>
                    <p className='text-justify'>
                    Essentially, <code>useRef</code> is like a “box” that can hold a mutable value in its <code>.current</code> property.<br></br><br></br>

                    You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <code>{code2}</code>, React will set its <code>.current</code> property to the corresponding DOM node whenever that node changes.<br></br><br></br>

                    However, <code>useRef()</code> is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.<br></br><br></br>

                    This works because <code>useRef()</code> creates a plain JavaScript object. The only difference between <code>useRef()</code> and creating a {<code>current: ...</code>} object yourself is that useRef will give you the same ref object on every render.<br></br><br></br>

                    Keep in mind that <code>useRef</code> doesn’t notify you when its content changes. Mutating the <code>.current</code> property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.<br></br><br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;