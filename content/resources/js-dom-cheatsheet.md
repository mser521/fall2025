---
title: "DOM Cheatsheet"
group_order: 5
group: "JavaScript"
order: 1
draft: 0
---

<p>Here are some examples of different selector methods and approaches to updating the DOM. You can also
    try practicing with the interactive <a href="/fall2025/downloads/dom-tester/index.html" target="_blank">DOM
        manipulation tool</a>.</p>

## Selector Methods
<table>
    <tr>
        <th>Method</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>getElementById()</td>
        <td><code>document.getElementById("my_element")</code></td>
    </tr>
    <tr>
        <td>querySelector()</td>
        <td><code>document.querySelector("#my_element")<br>document.querySelector("p")<br>document.querySelector(".my-announcements")</code>
        </td>
    </tr>
    <tr>
        <td>querySelectorAll()</td>
        <td><code>document.querySelectorAll("p")</code></td>
    </tr>
    <tr>
        <td>getElementsByTagName()</td>
        <td><code>document.getElementsByTagName("div")</code></td>
    </tr>
    <tr>
        <td>getElementsByClassName()</td>
        <td><code>document.getElementsByClassName(".panel")</code></td>
    </tr>
</table>

## Some examples of HTML attributes you can modify
<table>
    <tr>
        <th>Attribute</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>className</td>
        <td><code>el.className = "panel";</code></td>
    </tr>
    <tr>
        <td>innerHTML</td>
        <td><code>el.innerHTML = "&lt;p&gt;hi&lt;/p&gt;";</code></td>
    </tr>
    <tr>
        <td>src (for images)</td>
        <td><code>document.querySelector(".my_image").src = "sponge_bob.png";</code></td>
    </tr>
    <tr>
        <td>href (for links)</td>
        <td><code>document.querySelector(".my_link").href = 'https://www.wikipedia.org';</code></td>
    </tr>
</table>

## Some examples of style properties you can modify
<table>
    <tr>
        <th>Property</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>width</td>
        <td><code>el.style.width = "200px";</code></td>
    </tr>
    <tr>
        <td>height</td>
        <td><code>el.style.height = "200px";</code></td>
    </tr>
    <tr>
        <td>background-color</td>
        <td><code>el.style.backgroundColor = "hotpink";</code></td>
    </tr>
    <tr>
        <td>border-width</td>
        <td><code>el.style.borderWidth = "5px";</code></td>
    </tr>
    <tr>
        <td>padding</td>
        <td><code>el.style.padding = "10px";</code></td>
    </tr>
    <tr>
        <td>display</td>
        <td><code>el.style.display = "none";</code></td>
    </tr>
</table>

## Some useful helper functions
<table>
    <tr>
        <th>Property</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>insertAdjacentHTML(position, htmlString)</td>
        <td>
            <code>
                el.insertAdjacentHTML("beforeend", 
                    "&lt;p&gt;stuff&lt;/p&gt;");
            </code><br>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML"
                target="_blank">insertAdjacentHTML docs</a>
        </td>
    </tr>
    <tr>
        <td>classList.add(className)</td>
        <td>
            <code>el.classList.add("highlight");</code><br>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" target="_blank">classList
                docs</a>
        </td>
    </tr>
    <tr>
        <td>classList.remove(className)</td>
        <td><code>el.classList.remove("highlight");</code></td>
    </tr>
    <tr>
        <td>classList.toggle(className)</td>
        <td><code>el.classList.toggle("highlight");</code></td>
    </tr>
</table>

## Debugging Tips
When working with DOM manipulation, here are some helpful debugging techniques:

- **Check your selectors**: Use `console.log(document.querySelector("#my-element"))` to verify you're selecting the right element
- **Inspect elements**: Right-click on elements in your browser and select "Inspect" to see the HTML structure
- **Use console.log()**: Add `console.log("Function called!")` to verify your functions are being triggered
- **Check for typos**: Common mistakes include misspelled IDs, missing quotes, or incorrect class names