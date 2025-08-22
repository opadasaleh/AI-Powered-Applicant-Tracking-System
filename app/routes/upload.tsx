import {useState, type FormEvent} from 'react'
import FileUploader from '~/components/FileUploader';
import Navbar from '~/components/Navbar'

function upload() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');    
    const [file, setFile] = useState();

    const handleFileSelect = (file: File | null) => {
        setFile(file)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { }

    return (
<main className="bg-[url(/images/bg-main.svg)] bg-cover">
            <Navbar />
            
            
          <section className="main-section">
              <div className="page-heading py-16">
                    <h1>Smart feedback for your dream jop </h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src='/public/images/resume-scan.gif' />
                        </>
                    ) : (
                            <h2>Drop your resume for an ATS score and improvement tips</h2>
                    )}
                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-'>
                            <div className='form-div'>
                                <label htmlFor='company-name'>Comapny Name</label>
                                <input type='text' name='company-name' placeholder='Company Name' id='company-name'></input>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='jop-title'>Jop Title</label>
                                <input type='text' name='jop-title' placeholder='Jop Title' id='jop-title'></input>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='jop-description'>Jop Description</label>
                                <textarea rows={5} name='jop-description' placeholder='Jop Description' id='jop-description'></textarea>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='uploader'>Upload Resume</label>
                                    <FileUploader onFileSelect={handleFileSelect}/>           
                            </div>
                            <button className='primary-button' type='submit'>
                                Analyze Resume 
                            </button>


                        </form>
                    )}
              </div>
          </section>

          </main>
          )
}

export default upload