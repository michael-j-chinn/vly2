/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react'
import Head from 'next/head'
import { Container } from 'next/app'
import { withRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import { FullPage } from '../hocs/publicPage'
import { Spacer } from '../components/VTheme/VTheme'

class ErrorPage extends React.Component {
  static propTypes () {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    }
  }

  static getInitialProps ({ res, xhr }) {
    const errorCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { errorCode }
  }

  render () {
    var response

    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <FullPage>
            <Head>
              <FormattedMessage
                id='error.pagenotfound.title'
                description='Page title for the 404 error'
                defaultMessage='Oh no! Page not found'
                tagName='title'
              />
            </Head>
            <Spacer />
            <Spacer />
            <div>
              <FormattedMessage
                id='error.pagenotfound.title'
                description='Page title for the 404 error'
                defaultMessage='Oh no! Page not found'
                tagName='h1'
              />
              <FormattedMessage
                id='error.pagenotfound.description'
                defaultMessage="The page you are looking for is not here. We have looked everywhere but it doesn't seem to exist. Perhaps it just hasn't been built yet."
              />
            &nbsp;
              <a href='https://voluntari.ly/get-involved'>
                <FormattedMessage
                  id='error.pagenotfound.contribute'
                  defaultMessage='If you can write code you can help fix that by becoming a contributor to the project.'
                />
              </a>
          &nbsp;
            </div>
            <Spacer />
            <Container className='pt-5 text-center'>
              <p>
                An <strong>HTTP { this.props.errorCode }</strong> error occurred while
                trying to access <strong>{ this.props.router.asPath }</strong>
              </p>
            </Container>
          </FullPage>
        )
        break
      default:
        response = (
          <FullPage>
            <Head>
              <FormattedMessage
                id='error.servererror.title'
                description='Page title for error pages'
                defaultMessage='There was a problem'
                tagName='title'
              />
            </Head>
            <Spacer />
            <Spacer />
            <div>
              <FormattedMessage
                id='error.servererror.description'
                description='A server error'
                defaultMessage='Sorry, there was a problem and we can not complete this task. We have let our team know so they can take a look and fix it. For now try to refresh the page, or go back to the previous page'
                tagName='h1'
              />

              <Container className='pt-5 text-center'>
                <h1 className='display-4'>HTTP { this.props.errorCode } Error</h1>
                <p>
                  An <strong>HTTP { this.props.errorCode }</strong> error occurred while
                  trying to access <strong>{ this.props.router.asPath }</strong>
                </p>
              </Container>
          &nbsp;
            </div>
          </FullPage>

        )
    }

    return response
  }
}

export const ErrorPageTest = ErrorPage // for test

export default withRouter(ErrorPage)
