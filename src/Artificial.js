import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '60vh',
  marginTop: '40px',
};

const headerBoxStyle = {
  background: 'linear-gradient(90deg, #eaf4fb 0%, #dbeafe 100%)',
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(34,44,68,0.06)', // Match navbar shadow
  padding: '24px 48px',
  marginBottom: '20px',
  textAlign: 'center',
  maxWidth: '600px',
};

const docBoxStyle = {
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(34,44,68,0.06)',
  padding: '32px 40px',
  maxWidth: '700px',
  width: '100%',
};

function Artificial() {
  return (
    <div style={containerStyle}>
      <div style={headerBoxStyle}>
        <h1 style={{margin: 0}}>Artificial Intelligence</h1>
      </div>
      <div style={docBoxStyle}>
        <article className="document">
          <p>
            Artificial intelligence is a tool to be used, not something to rely on for creative tasks.
            As it develops and can now create things that look mostly realistic as long as you're not looking for details. I believe that AI or its successor, AGI, will be able to create works, but it will never be able to bypass human ingenuity.
          </p>
          <p>
            Especially large models that have drawn the ire of the industry: most people can find what they are asking with a simple web search, not demanding kilowatts of power to answer a simple question.
            If people become relient on one source of information that can and will occasionally be wrong. 
          </p>
          <p>If people become reliant on one source of information that can and will occasionally be wrong. Privacy concerns; all of the big AI companies; meta, apple, google, X. collect all interactions with there LLMS to train them. Out side of the technology space, people I know have begun to rely on LLMS like a oricle, not questioning what gets written out.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Artificial;