import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'one-touch-input',
  styleUrl: 'one-touch-input.css',
  shadow: true,
})
export class OneTouchInput {
  @Prop() type: string;
  @Prop() label: string;
  @Prop() align: string;
  render() {
    return (
      <div>
        <label>{this.label}</label>
        <input type={this.type} />
      </div>
    );
  }

}
