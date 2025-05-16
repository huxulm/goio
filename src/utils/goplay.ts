import { GoPlayProxy } from "@ggicci/goplay";
const goplay = new GoPlayProxy("https://goplay.xaotos.cn");

const buttonClasses = ["px-2", "py-1", "rounded", "bg-slate-50", "text-black", "cursor-pointer", "mr-5", "hover:bg-red-100", "hover:text-red-500"];
export function initGoPlay(container: HTMLElement) {
        const targetPre = container.previousElementSibling;
        if (!targetPre) {
            console.warn("goplay: no target pre node (previous pre sibling of .goplay-container), skip init.");
            return;
        }
        const code = targetPre.textContent!.trim();

        const runButton = document.createElement("button");
        runButton.classList.add("goplay-run");
        runButton.classList.add(...buttonClasses);
        runButton.textContent = "🚀 Run";
        container.append(runButton);
        
        const shareButton = document.createElement("button");
        shareButton.classList.add("goplay-share");
        shareButton.classList.add(...buttonClasses);
        shareButton.textContent = "Share";
        container.append(shareButton);

        runButton.onclick = function() {
            let outputContainer = container.querySelector<HTMLElement>(".goplay-output");
            if (!outputContainer) {
                const outputPre = document.createElement("pre");
                outputContainer = document.createElement("code");
                outputContainer.classList.add("goplay-output", "hljs");
                outputPre.appendChild(outputContainer);
                container.prepend(outputPre);
            }
            goplay.renderCompile(outputContainer, code);
        };
        shareButton.onclick = async function() {
            const shareUrl = await goplay.share(code);
            window.open(shareUrl, "_blank")!.focus();
        };
    }