function Loading({ isLoading }) {
    return (
      isLoading && (
        <div class='page-loading'>
          <h2>Loading...</h2>
        </div>
      )
    );
  }
  
  export default Loading;
  