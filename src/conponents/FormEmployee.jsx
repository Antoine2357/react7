import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    } 

    submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
           }; 
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        fetch(url, config).then(res => res.json())

        .then(res => {
        if (res.error) {
            alert(res.error);
        } else {
            alert(`Film ajouté avec l'ID ${res}!`);
        }
        }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un Film');
        });;
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }


    render(){
        return (
        <div className="FormEmployee">
            <h1>Saisi d'un Film</h1>

            <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                    <label htmlFor="lastname">Nom du Film</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="firstname">Poster</label>
                    <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="email">commentaire</label>
                    <input
                        type="text"
                        id="comment"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}
                    />
                    </div>
                    <hr />
                    <div className="form-data">
                    <input type="submit" value="Envoyer" />
                    </div>
                </fieldset>
            </form>
        </div> )
    }   


}

export default Form 