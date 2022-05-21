export default function Modal({children, id, title, onClick}){
    return (
        <>
        <div>
        <div id={id} data-uk-modal>
          <div className="uk-modal-dialog">
            <button
              className="uk-modal-close-default"
              type="button"
              data-uk-close
            />
            <div className="uk-modal-header">
              <h2 className="uk-modal-title">{title}</h2>
            </div>
            <div className="uk-modal-body">
              {children}
            </div>
            {onClick && 
            <div className="uk-modal-footer uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <button onClick={onClick} className="uk-button uk-button-primary" type="button">
              Save
            </button>
          </div>
            }
          </div>
        </div>
      </div>
        </>
    )
}