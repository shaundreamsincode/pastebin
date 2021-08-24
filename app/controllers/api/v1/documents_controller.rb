module Api
  module V1
    class DocumentsController < ApiController
      def index
        @document = Document.find_by!(slug: params[:slug])
        render json: { body: @document.body }
      end

      def create
        @document = Document.create(
          body: document_params[:body],
          slug: SecureRandom.uuid
        )

        render json: { body: params[:body], slug: @document.slug }
      end

      private

      def document_params
        params.require(:document).permit(:body)
      end
    end
  end
end
