import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import styles from './Editor2.module.css';

const Editor2 = ({ initialValue, onChange, label, required, value, disabled, height }) => {

    return (
        <div className={styles.Editor2}>
            <label>{label} {required ? '*' : null}</label>
            <Editor
                disabled={disabled}
                initialValue={initialValue}
                value={value}
                apiKey="1qapnf6mfzx3n75bkfrxc63s7zkefivpg3ybzcqqgebe8zce"
                init={{
                    height: height ?? 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright alignjustify underline forecolor hilitecolor fontname fontsize| \
                        bullist numlist outdent indent | help'
                }}
                onEditorChange={onChange}
            />
        </div>
    );
}

export default Editor2;
