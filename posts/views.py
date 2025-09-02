from django.shortcuts import render, get_object_or_404
from.models import Post

# Create your views here.
def posts_list(request):
    posts = Post.objects.all().order_by('-date') 
    return render(request, 'posts/post_lists.html', {'posts': posts})


def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'posts/post_detail.html', {'post': post})