import { FC, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-typescript';
import { EditorContainer, FormatBtn } from '../styles/styles';

// TODO: Work on JSX Highlighting
// ! WARNING: Highlighting is not working with Webpack 5

interface CodeEditorProps {
	initialValue: string;
	onChange: (value: string) => void;
}

const CodeEditor: FC<CodeEditorProps> = ({ onChange, initialValue }) => {
	const editorRef = useRef<any>();

	const handleEditorDidMount: OnMount = (editor, monaco) => {
		editorRef.current = editor;
		editor.onDidChangeModelContent(() => {
			const value = editor.getValue();
			onChange(value);
		});
		editor.getModel()?.updateOptions({ tabSize: 2 });
	};

	const format = () => {
		const value = editorRef.current?.getValue();
		if (!value) return;
		const formatted = prettier
			.format(value, {
				parser: 'typescript',
				plugins: [parser],
				useTabs: false,
				semi: true,
				singleQuote: true,
			})
			.replace(/\n$/, '');
		editorRef.current?.setValue(formatted);
	};

	return (
		<EditorContainer>
			<FormatBtn onClick={format} variant='contained' className='test'>
				Format
			</FormatBtn>
			<Editor
				onMount={handleEditorDidMount}
				value={initialValue}
				options={{
					wordWrap: 'on',
					minimap: { enabled: false },
					showUnused: false,
					folding: false,
					lineNumbersMinChars: 3,
					fontSize: 16,
					scrollBeyondLastLine: false,
					automaticLayout: true,
				}}
				theme='vs-dark'
				language='javascript'
				height={'500px'}
			/>
		</EditorContainer>
	);
};

export default CodeEditor;
