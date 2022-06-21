import { FC, useEffect, useRef } from 'react';

interface PreviewProps {
	code: string;
}

const html = `
		<html>
			<head></head>
			<body>
				<div id="root"></div>
				<script>
					window.addEventListener('message', (event) => {
						try {
								eval(event.data);
							} catch (error) {
								const root = document.getElementById('root');
								root.innerHTML = '<div>' + error + '</div>';
								throw error;
							}
					}, false)
				</script>
			</body>
		</html>
	`;

const Preview: FC<PreviewProps> = ({ code }) => {
	const iframe = useRef<any>();

	useEffect(() => {
		iframe.current.srcdoc = html;
		iframe.current.contentWindow.postMessage(code, '*');
	}, [code]);

	return (
		<>
			<iframe
				title='preview'
				ref={iframe}
				sandbox='allow-scripts'
				srcDoc={html}
			/>
		</>
	);
};

export default Preview;
